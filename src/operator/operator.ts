import * as fs from "fs";
import * as glob from "@actions/glob";
import * as vm from "vm";
import { Option } from "./option";
import { LintResult } from "../lint-result";

interface Context {
    source: LintResult[];
    result: LintResult[];
}

export abstract class Operator {
    async operate(option: Option): Promise<void> {
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const result: LintResult[] = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs.readFileSync(path, "utf-8")) as LintResult[];
            const executeResults = this.execute(lintResults, option.method);
            result.push(...executeResults);
        }
        this.writeFile(option.outputPath, result);
    }

    execute(lintResults: LintResult[], method: string): LintResult[] {
        const context = this.createContext(lintResults);
        const script = new vm.Script(this.createScript(method));
        script.runInNewContext(context);
        return context.result;
    }

    private createContext(lintResults: LintResult[]): Context {
        return {
            source: lintResults,
            result: [],
        };
    }

    protected abstract createScript(method: string): string;

    private writeFile(path: string, lintResults: LintResult[]) {
        fs.writeFileSync(path, JSON.stringify(lintResults));
    }
}
