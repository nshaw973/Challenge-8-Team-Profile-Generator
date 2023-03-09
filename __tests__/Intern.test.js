const Intern = require("../lib/Intern")

describe('Manager', () => {
    it('Intern must have a name, id, email, and School Name', () => {
        
        const id = 1;
        const email = 'nshaw973@gmail.com';
        const school = 'UCI';
        const role = Intern.prototype.getRole();

        const intern = new Intern('Nathan', id, email, role, school);

        expect(intern.employeeName).toEqual('Nathan');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('nshaw973@gmail.com');
        expect(intern.school).toEqual('UCI');
    });
});