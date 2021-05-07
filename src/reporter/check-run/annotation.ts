import { CheckAnnotationData, CheckAnnotationLevel } from "../../../graphql/graphql";
import { GetCheckRunAnnotationsQueryCheckRunAnnotationsNode } from "../../github/types";
import { LintResult } from "../../lint-result";
import { GitHubContext } from "../../github/context";
import { trimPath } from "./path";
import * as core from "@actions/core";

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
        core.info(`path: left: ${left.path}, right: ${right.path}`);
        return false;
    }
    if (left.message !== right.message) {
        core.info(`message: left: ${left.message}, right: ${right.message}`);
        return false;
    }
    if (left.title !== right.title) {
        core.info(`title: left: ${left.title}, right: ${right.title}`);
        return false;
    }
    if (left.annotationLevel !== right.annotationLevel) {
        core.info(`annotationLevel: left: ${left.annotationLevel}, right: ${right.annotationLevel}`);
        return false;
    }
    if (left.location.start.line != right.location.startLine) {
        core.info(`start line: left: ${left.location.start.line}, right: ${right.location.startLine}`);
        return false;
    }
    if (left.location.start.column != right.location.startColumn) {
        core.info(`start column, left: ${left.location.start.column}, right: ${right.location.startColumn}`);
        return false;
    }
    if (left.location.end.line != right.location.endLine) {
        core.info(`end line: left: ${left.location.end.line}, right: ${right.location.endLine}`);
        return false;
    }
    if (left.location.end.column != right.location.endColumn) {
        core.info(`end column: left: ${left.location.end.column}, right: ${right.location.endColumn}`);
        return false;
    }

    return true;
}
