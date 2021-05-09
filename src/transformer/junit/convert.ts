import { LintResult } from "../../lint-result";
import { JunitTestSuite } from "./entity";
import { JunitHandler } from "./junit-handler";
import { DefaultJunitHandler } from "./junit-handler-default";
import { EslintJunitHandler } from "./junit-handler-eslint";

const handlers: JunitHandler[] = [new EslintJunitHandler(), new DefaultJunitHandler()];

export function convertJunitToLintResult(testSuites: JunitTestSuite[]): LintResult[] {
    for (const handler of handlers) {
        if (handler.match(testSuites)) {
            return handler.handle(testSuites);
        }
    }
    return [];
}
