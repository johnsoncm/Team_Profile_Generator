// Import Intern file

const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Intern");

test("Can get school via getSchool" , () =>{
    const testValue = "School";
    const e = new Intern("Casey" , 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})

test("Can get employee role via getRole" , () => {
    const testValue = "Intern"
    const e = new Intern("Casey", 1, "test@test.com", "School" , testValue)
    expect(e.getRole()).toBe(testValue);
})