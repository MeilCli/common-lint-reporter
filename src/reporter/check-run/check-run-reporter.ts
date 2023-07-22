import { LintResult } from "../../lint-result";
import { Option } from "../../option";
import { Reporter } from "../../reporter";
import { githubClient, GitHubClient } from "../../github/client";
import { githubContext, GitHubContext } from "../../github/context";
import { getCommitStatusAndCheckRunWithPaging, getCheckRunAnnotationsWithPaging } from "../../github/paging";
import { GetCheckRunAnnotationsQueryCheckRunAnnotationsNode } from "../../github/types";
import { RequestableCheckStatusState, CheckAnnotationData } from "../../../graphql/graphql";
import { calculateConclusion } from "../conclusion";
import { createSummary } from "./summary";
import { createMessage } from "./message";
import { createAnnotation, equalsAnnotation } from "./annotation";

export class CheckRunReporter implements Reporter {
    async report(option: Option, lintResults: LintResult[]): Promise<void> {
        const client = githubClient(option);
        const context = githubContext(option);

        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            .repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }

        const statusAndCheckRuns = await getCommitStatusAndCheckRunWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find(
            (x) => x.__typename == "CheckRun" && x.name == option.reportName,
        );

        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: RequestableCheckStatusState.InProgress,
            });
        }

        const checkRunId =
            foundSameCheckRun == undefined
                ? (
                      await client.createCheckRun({
                          repositoryId: repositoryId,
                          headSha: context.commitSha(),
                          name: option.reportName,
                          startedAt: new Date().toISOString(),
                          status: RequestableCheckStatusState.InProgress,
                      })
                  )?.createCheckRun?.checkRun?.id
                : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }

        const pastAnnotations: GetCheckRunAnnotationsQueryCheckRunAnnotationsNode[] =
            foundSameCheckRun == undefined
                ? []
                : await getCheckRunAnnotationsWithPaging(client, { checkRunId: foundSameCheckRun.id });

        await this.uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations);
    }

    private async uploadResult(
        client: GitHubClient,
        context: GitHubContext,
        option: Option,
        repositoryId: string,
        checkRunId: string,
        lintResults: LintResult[],
        pastAnnotations: GetCheckRunAnnotationsQueryCheckRunAnnotationsNode[],
    ) {
        const batchSize = 50;
        let currentIndex = 0;
        const rawAnnotations = this.convertToCheckAnnotationData(context, lintResults);
        const newAnnotations = rawAnnotations.filter(
            (x) => pastAnnotations.filter((y) => equalsAnnotation(y, x)).length == 0,
        );
        while (currentIndex + batchSize < newAnnotations.length) {
            const batchNumber = `${currentIndex / batchSize + 1}/${Math.ceil(newAnnotations.length / batchSize)}`;
            const surmmary = `${createSummary(lintResults)}, while batch ${batchNumber}`;
            const batchedAnnotations = newAnnotations.slice(currentIndex, currentIndex + batchSize);
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: checkRunId,
                status: RequestableCheckStatusState.InProgress,
                output: {
                    title: option.reportName,
                    summary: surmmary,
                    annotations: batchedAnnotations,
                },
            });
            currentIndex += batchSize;
        }

        const annotations = newAnnotations.slice(currentIndex);
        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: RequestableCheckStatusState.Completed,
            conclusion: calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
            output: {
                title: option.reportName,
                summary: createSummary(lintResults),
                text: createMessage(context, lintResults),
                annotations: annotations,
            },
        });
    }

    private convertToCheckAnnotationData(context: GitHubContext, lintResults: LintResult[]): CheckAnnotationData[] {
        const result: CheckAnnotationData[] = [];

        for (const lintResult of lintResults) {
            const annotation = createAnnotation(context, lintResult);
            if (annotation != null) {
                result.push(annotation);
            }
        }

        return result;
    }
}
