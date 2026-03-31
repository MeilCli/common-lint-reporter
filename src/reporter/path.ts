import { GitHubContext } from "../github/context.js";
import * as path from "path";

export function trimPath(context: GitHubContext, filePath: string): string {
    return filePath.replace(`${context.workspacePath()}${path.sep}`, "");
}
