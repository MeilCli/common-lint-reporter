import * as path from "path";
import { LintResult, LintResultLevel } from "../lint-result";
import { Option } from "../option";
import { Reporter } from "../reporter";
import { githubClient } from "../github/client";
import { GitHubContext, githubContext } from "../github/context";
import {
    RequestableCheckStatusState,
    CheckAnnotationData,
    CheckAnnotationLevel,
    CheckConclusionState,
} from "../../graphql/graphql";

export class CheckRunReporter implements Reporter {
    async report(option: Option, lintResults: LintResult[]): Promise<void> {
        const client = githubClient(option);
        const context = githubContext(option);

        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            .repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }

        const checkRunId = (
            await client.createCheckRun({
                repositoryId: repositoryId,
                headSha: context.commitSha(),
                name: option.reportName,
                startedAt: new Date().toISOString(),
                status: RequestableCheckStatusState.InProgress,
            })
        )?.createCheckRun?.checkRun?.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }

        const batchSize = 50;
        let currentIndex = 0;
        while (currentIndex + batchSize < lintResults.length) {
            const batchNumber = `${currentIndex / batchSize + 1}/${Math.ceil(lintResults.length / batchSize)}`;
            const surmmary = `${this.summary(lintResults)}, while batch ${batchNumber}`;
            const batchedAnnotations = lintResults.slice(currentIndex, currentIndex + batchSize);
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: checkRunId,
                status: RequestableCheckStatusState.InProgress,
                output: {
                    title: option.reportName,
                    summary: surmmary,
                    annotations: this.convertToCheckAnnotationData(context, batchedAnnotations),
                },
            });
            currentIndex += batchSize;
        }

        const annotations = lintResults.slice(currentIndex);
        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: RequestableCheckStatusState.Completed,
            conclusion: this.calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
            output: {
                title: option.reportName,
                summary: this.summary(lintResults),
                text: this.markdownMessage(context, lintResults),
                annotations: this.convertToCheckAnnotationData(context, annotations),
            },
        });
    }

    private countLevel(lintResults: LintResult[], targetLevel: LintResultLevel): number {
        let count = 0;
        for (const lintResult of lintResults) {
            if (lintResult.level == targetLevel) {
                count += 1;
            }
        }
        return count;
    }

    private summary(lintResults: LintResult[]): string {
        const noticeCount = this.countLevel(lintResults, "notice");
        const warningCount = this.countLevel(lintResults, "warning");
        const failureCount = this.countLevel(lintResults, "failure");
        const messages: string[] = [];
        if (noticeCount == 1) {
            messages.push("1 notice");
        }
        if (2 <= noticeCount) {
            messages.push(`${noticeCount} notices`);
        }
        if (warningCount == 1) {
            messages.push("1 warning");
        }
        if (2 <= warningCount) {
            messages.push(`${warningCount} warnings`);
        }
        if (failureCount == 1) {
            messages.push("1 failure");
        }
        if (2 <= failureCount) {
            messages.push(`${failureCount} failures`);
        }
        if (messages.length == 0) {
            return "lint message is empty";
        }
        return `${messages.join(" and ")} found`;
    }

    private trimPath(context: GitHubContext, filePath: string): string {
        return filePath.replace(`${context.workspacePath()}${path.sep}`, "");
    }

    private markdownLevelMessage(
        context: GitHubContext,
        lintResults: LintResult[],
        targetLevel: LintResultLevel
    ): string {
        let result = "";
        for (const lintResult of lintResults) {
            if (lintResult.level != targetLevel) {
                continue;
            }
            let line = "";
            if (lintResult.startLine != undefined) {
                line += `L${lintResult.startLine}`;
            }
            if (
                lintResult.startLine != undefined &&
                lintResult.endLine != undefined &&
                lintResult.startLine != lintResult.endLine
            ) {
                line += `-L${lintResult.endLine}`;
            }
            const baseUrl = `https://github.com/${context.owner()}/${context.repository()}`;
            const link = `${baseUrl}/blob/${context.commitSha()}/${this.trimPath(context, lintResult.path)}#${line}`;
            result += `### [${this.trimPath(context, lintResult.path)} ${line}](${link})\n`;
            result += `- Rule: ${lintResult.rule}\n`;
            result += lintResult.message;
            result += "\n";
        }
        return result;
    }

    private markdownMessage(context: GitHubContext, lintResults: LintResult[]): string {
        const noticeCount = this.countLevel(lintResults, "notice");
        const warningCount = this.countLevel(lintResults, "warning");
        const failureCount = this.countLevel(lintResults, "failure");
        let result = "";

        if (0 < failureCount) {
            if (failureCount == 1) {
                result += "## 1 Failure\n";
            } else {
                result += `## ${failureCount} Failures\n`;
            }
            result += this.markdownLevelMessage(context, lintResults, "failure");
        }
        if (0 < warningCount) {
            if (warningCount == 1) {
                result += "## 1 Warning\n";
            } else {
                result += `## ${warningCount} Warnings\n`;
            }
            result += this.markdownLevelMessage(context, lintResults, "warning");
        }
        if (0 < noticeCount) {
            if (noticeCount == 1) {
                result += "## 1 Notice\n";
            } else {
                result += `## ${noticeCount} Notices\n`;
            }
            result += this.markdownLevelMessage(context, lintResults, "notice");
        }

        return result;
    }

    private convertToCheckAnnotationData(context: GitHubContext, lintResults: LintResult[]): CheckAnnotationData[] {
        const result: CheckAnnotationData[] = [];

        for (const lintResult of lintResults) {
            if (lintResult.startLine == undefined) {
                // report only at summary
                continue;
            }
            let level: CheckAnnotationLevel;
            if (lintResult.level == "notice") {
                level = CheckAnnotationLevel.Notice;
            } else if (lintResult.level == "warning") {
                level = CheckAnnotationLevel.Warning;
            } else {
                level = CheckAnnotationLevel.Failure;
            }
            let startColumn: number | undefined;
            let endColumn: number | undefined;
            if (lintResult.startLine == lintResult.endLine) {
                startColumn = lintResult.startColumn;
                endColumn = lintResult.endColumn;
            } else {
                startColumn = undefined;
                endColumn = undefined;
            }
            result.push({
                path: this.trimPath(context, lintResult.path),
                location: {
                    startLine: lintResult.startLine,
                    endLine: lintResult.endLine ?? lintResult.startLine,
                    startColumn: startColumn,
                    endColumn: endColumn,
                },
                annotationLevel: level,
                message: `- Rule: ${lintResult.rule}\n${lintResult.message}`,
            });
        }
        return result;
    }

    private calculateConclusion(option: Option, lintResults: LintResult[]): CheckConclusionState {
        const noticeCount = this.countLevel(lintResults, "notice");
        const warningCount = this.countLevel(lintResults, "warning");
        const failureCount = this.countLevel(lintResults, "failure");
        const score =
            noticeCount * option.conclusionNoticeWeight +
            warningCount * option.conclusionWarningWeight +
            failureCount * option.conclusionFailureWeight;
        return score < option.conclusionFailureThreshold ? CheckConclusionState.Success : CheckConclusionState.Failure;
    }
}
