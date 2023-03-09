const Manager = require("../lib/Manager")

describe('Manager', () => {
    it('Manager must have a name, id, email, and office number', () => {

        const id = 1
        const email = 'nshaw973@gmail.com'
        const role = Manager.prototype.getRole();
        
        const manager = new Manager('Nathan', id, email, role);

        expect(manager.employeeName).toEqual('Nathan');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('nshaw973@gmail.com');
        expect(manager.officeNumber).toEqual(1);
    });
    it('Manager has an office number.', () => {

        const manager = new Manager();
        const officeNumber = manager.officeNumber;

        expect(officeNumber).toEqual(1);
    })
});