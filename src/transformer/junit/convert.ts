import { LintResult } from "../../lint-result";
import { JunitTestSuite } from "./entity";
import { JunitHandler } from "./junit-handler";
import { DefaultJunitHandler } from "./junit-handler-default";
import { EslintJunitHandler } from "./junit-handler-eslint";
import { CpplintJunitHandler } from "./junit-handler-cpplint";
import { RubocopJunitHandler } from "./junit-handler-rubocop";

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
