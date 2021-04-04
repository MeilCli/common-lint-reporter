import * as fs from "fs";
import * as glob from "@actions/glob";
import * as vm from "vm";
import { Option, FunctionalOption } from "./option";
import { LintResult } from "../lint-result";

interface Context {
    source: LintResult[];
    result: LintResult[];
}

export abstract class Operator<TOption extends Option> {
    async operate(option: TOption): Promise<void> {
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const result: LintResult[] = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs.readFileSync(path, "utf-8")) as LintResult[];
            const executeResults = this.execute(lintResults, option);
            result.push(...executeResults);
        }
        this.writeFile(option.outputPath, result);
    }

    public abstract execute(lintResults: LintResult[], option: TOption): LintResult[];

    protected createContext(lintResults: LintResult[]): Context {
        return {
            source: lintResults,
            result: [],
        };
    }

    protected writeFile(path: string, lintResults: LintResult[]) {
        fs.writeFileSync(path, JSON.stringify(lintResults));
    }
}

export abstract class FunctionalOperator extends Operator<FunctionalOption> {
    execute(lintResults: LintResult[], option: FunctionalOption): LintResult[] {
        const context = this.createContext(lintResults);
        const script = new vm.Script(this.createScript(option.func));
        script.runInNewContext(context);
        return context.result;
    }

    protected abstract createScript(func: string): string;
}
