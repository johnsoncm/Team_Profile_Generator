// Import Manager file

const Manager = require("../lib/Manager");

test("Can get office number via getOfficeNumber" , () =>{
    const testValue = "officeNumber";
    const e = new Manager("Casey" , 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})

test("Can get employee role via getRole" , () => {
    const testValue = "Manager"
    const e = new Manager("Casey", 1, "test@test.com", "officeNumber" , testValue)
    expect(e.getRole()).toBe(testValue);
});