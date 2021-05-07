import { CheckAnnotationData, CheckAnnotationLevel } from "../../../graphql/graphql";
import { GetCheckRunAnnotationsQueryCheckRunAnnotationsNode } from "../../github/types";
import { LintResult } from "../../lint-result";
import { GitHubContext } from "../../github/context";
import { trimPath } from "./path";

export function createAnnotation(context: GitHubContext, lintResult: LintResult): CheckAnnotationData | null {
    if (lintResult.startLine == undefined) {
        // report only at summary
        return null;
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

    return {
        path: trimPath(context, lintResult.path),
        location: {
            startLine: lintResult.startLine,
            endLine: lintResult.endLine ?? lintResult.startLine,
            startColumn: startColumn,
            endColumn: endColumn,
        },
        annotationLevel: level,
        title: `Rule: ${lintResult.rule}`,
        message: lintResult.message,
    };
}

export function equalsAnnotation(
    left: GetCheckRunAnnotationsQueryCheckRunAnnotationsNode,
    right: CheckAnnotationData
): boolean {
    if (left.path !== right.path) {
        return false;
    }
    if (left.message !== right.message) {
        return false;
    }
    if (left.title !== right.title) {
        return false;
    }
    if (left.annotationLevel !== right.annotationLevel) {
        return false;
    }
    if (left.location.start.line != right.location.startLine) {
        return false;
    }
    if (left.location.start.column != right.location.startColumn) {
        return false;
    }
    if (left.location.end.column != right.location.endColumn) {
        return false;
    }
    if (left.location.end.line != right.location.endColumn) {
        return false;
    }

    return true;
}
