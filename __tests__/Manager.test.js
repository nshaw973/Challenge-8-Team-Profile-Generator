const Manager = require("../lib/Manager")

describe('Manager', () => {
    it('Manager must have a name, id, email, and office number', () => {
        
        const id = 1
        const email = 'nshaw973@gmail.com'
        const manager = new Manager('Nathan', id, email, 100);

        expect(manager.employeeName).toEqual('Nathan');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('nshaw973@gmail.com');
        expect(manager.officeNumber).toEqual(100);
    });
});