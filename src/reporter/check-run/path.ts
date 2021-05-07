import { GitHubContext } from "../../github/context";
import * as path from "path";

export function trimPath(context: GitHubContext, filePath: string): string {
    return filePath.replace(`${context.workspacePath()}${path.sep}`, "");
}
