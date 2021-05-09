import { FunctionalOperator } from "../../src/operator/operator";
import { createOption } from "./functional-option.test";

class TestFunctionalOperator extends FunctionalOperator {
    createScript(method: string): string {
        return `const rule = (${method})();if(rule != null) result.push({path:"",rule:rule,message:"",level:"notice"});`;
    }
}

test("testGitHubContext-workspacePath", async () => {
    const operator = new TestFunctionalOperator();
    const result = await operator.execute(
        [],
        createOption("() => github.workspacePath == 'test/' ? 'workspacePath' : ''")
    );

    expect(result.length).toBe(1);
    expect(result[0].rule).toBe("workspacePath");
});

test("testGitHubContext-owner", async () => {
    const operator = new TestFunctionalOperator();
    const result = await operator.execute([], createOption("() => github.owner == 'MeilCli' ? 'owner' : ''"));

    expect(result.length).toBe(1);
    expect(result[0].rule).toBe("owner");
});

test("testGitHubContext-repository", async () => {
    const operator = new TestFunctionalOperator();
    const result = await operator.execute(
        [],
        createOption("() => github.repository == 'common-lint-reporter' ? 'repository' : ''")
    );

    expect(result.length).toBe(1);
    expect(result[0].rule).toBe("repository");
});

test("testGitHubContext-pullRequest", async () => {
    const operator = new TestFunctionalOperator();
    const result = await operator.execute([], createOption("() => github.pullRequest == 1 ? 'pullRequest' : ''"));

    expect(result.length).toBe(1);
    expect(result[0].rule).toBe("pullRequest");
});

test("testGitHubContext-commitSha", async () => {
    const operator = new TestFunctionalOperator();
    const result = await operator.execute([], createOption("() => github.commitSha == 'test-hash' ? 'commitSha' : ''"));

    expect(result.length).toBe(1);
    expect(result[0].rule).toBe("commitSha");
});
