import * as fs from "fs";
import * as glob from "@actions/glob";
import { Option } from "./option";
import { LintResult } from "../lint-result";

export abstract class Transformer {
    async transform(option: Option): Promise<void> {
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        for await (const path of globber.globGenerator()) {
            const lintResults = this.parse(fs.readFileSync(path, "utf-8"));
            this.writeFile(path, lintResults);
        }
    }

    protected abstract parse(body: string): LintResult[];

    private writeFile(originalPath: string, lintResults: LintResult[]) {
        fs.writeFileSync(`${originalPath}.transformed`, JSON.stringify(lintResults));
    }
}
