// Import Employee file

const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// Employee test needs to test for:

// Get the name of employee using getName()

test("Can get name via getName" , () => {
    const testValue = "Casey"
    const e = new Employee(testValue)
    expect(e.getName()).toBe(testValue);
})

// Get Id via getID()

test("Gets id from getId", () => {
    const testValueId = 100
    const e = new Employee("id",testValueId)
    expect(e.getId().toBe(testValueId));
})

// Get email via getEmail

test("Gets email from getEmail", () => {
    const testValue = "test@test.com"
    const e = new Employee("email", 1, testValue)
    expect(e.getEmail().toBe(testValue));
})

// Get role

test("getRole() should return \"Employee\"" , () => {
    const testValue = "Employee";
    const e = new Employee("Casey" , 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});

// --------------------------------------------------------------//

test("Can set email via constructor argument" , () => {
    const testValue = "test@test.com";
    const e = new Employee("Casey" , 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set id via constructor argument" , () => {
    const testValue = 100;
    const e = new Employee("Casey" , testValue);
    expect(e.id).toBe(testValue);
});

test("Can set name via constructor arguements" , () =>{
    const name = "Casey";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can instantiate Employee instance" , () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});
