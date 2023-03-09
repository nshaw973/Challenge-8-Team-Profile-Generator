const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('Employee must have a name', () => {

        const employee = new Employee('   nathan   ');
        const nameFinal = employee.employeeName.trim().charAt(0).toUpperCase() + employee.employeeName.trim().slice(1);
        expect(nameFinal).toEqual('Nathan');

    });
    it('Employee must have an ID number that only shows up as an integer', () => {

        const employeeOne = new Employee('David', 7)
        const employeeTwo = new Employee('Nathan', '6');

        const idInteger = parseInt(employeeTwo.id)

        expect(employeeOne.id).toEqual(7)
        expect(idInteger).toEqual(6);
    })
    it('Employee must have a role assigned', () => {

        const employeeRole = Employee.prototype.getRole()

        expect(employeeRole).toEqual('Employee')
    })
    it('Employee must have an email.', () => {

        const employeeEmail = new Employee('Nathan', 10, 'nshaw973@gmail.com')

        expect(employeeEmail.email).toEqual('nshaw973@gmail.com')
    })
});