const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('Employee must have a name only as a string', () => {

        const employee = new Employee('Nathan', 6, 'nshaw973@gmail.com');
        
        expect(employee.employeeName).toEqual('Nathan');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('nshaw973@gmail.com');

    });
});