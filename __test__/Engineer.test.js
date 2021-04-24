const Engineer = require("../lib/Engineer");


test("Can get employee role via getRole" , () => {
    const testValue = "Engineer"
    const e = new Engineer("Casey", 1, "johnsoncm3@gmail.com", testValue)
    expect(e.getRole()).toBe(testValue);
})