const Employee = require("../lib/Employee");

test("Can get name via getName" , () => {
    const testValue = "Casey"
    const e = new Employee(testValue)
    expect(e.getName()).toBe(testValue);
})

test("Gets id from getId", () => {
    const testValueId = 100
    const e = new Employee("id",testValueId)
    expect(e.getId().toBe(testValueId));
})