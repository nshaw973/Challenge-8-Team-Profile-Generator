const Intern = require("../lib/Intern")

describe('Manager', () => {
    it('Manager must have a name, id, email, and office number', () => {
        
        const id = 1;
        const email = 'nshaw973@gmail.com';
        const school = 'UCI';

        const intern = new Intern('Nathan', id, email, school);

        expect(intern.employeeName).toEqual('Nathan');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('nshaw973@gmail.com');
        expect(intern.school).toEqual('UCI');
    });
});