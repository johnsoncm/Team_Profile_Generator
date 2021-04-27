// Import Engineer file

const Engineer = require("../lib/Engineer");

// Engineer test needs to test for 1) getRole, 2) github

test("Can set github account via constructor" , () => {
    const testValue = "GithubUser";
    const e = new Engineer("Foo" , 1, "test@test.com" , testValue);
    expect(e.github).toBe(testValue);
})


test("Can get employee role via getRole" , () => {
    const testValue = "Engineer"
    const e = new Engineer("Casey", 1, "test@test.com", "GitHubUser" , testValue)
    expect(e.getRole()).toBe(testValue);
})


test("Can get github user name via getGithub" , () => {
    const testValue = "GithubUser";
    const e = new Engineer("Foo" , 1, "test@test.com" , testValue);
    expect(e.getGithub()).toBe(testValue);
});