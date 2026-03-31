import { LintResult } from "../../lint-result.js";
import { JunitTestSuite } from "./entity.js";
import { JunitHandler } from "./junit-handler.js";
import { DefaultJunitHandler } from "./junit-handler-default.js";
import { EslintJunitHandler } from "./junit-handler-eslint.js";
import { CpplintJunitHandler } from "./junit-handler-cpplint.js";
import { RubocopJunitHandler } from "./junit-handler-rubocop.js";

const handlers: JunitHandler[] = [
    new EslintJunitHandler(),
    new CpplintJunitHandler(),
    new RubocopJunitHandler(),
    new DefaultJunitHandler(),
];

export function convertJunitToLintResult(testSuites: JunitTestSuite[]): LintResult[] {
    for (const handler of handlers) {
        if (handler.match(testSuites)) {
            return handler.handle(testSuites);
        }
    }
    return [];
}
