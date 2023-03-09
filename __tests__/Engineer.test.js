const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('Engineer must have a name, id, email, and github username', () => {
        
        const id = 3;
        const role = Engineer.prototype.getRole();
        const name = 'David';

        const engineer = new Engineer('David', id, 'nshaw973@gmail.com', role, 'nshaw973');

        expect(engineer.employeeName).toEqual(name);
    });
    it('Employee must have an email.', () => {

        const email = 'nshaw973@gmail.com';
        const engineer = new Engineer('Nathan', 10, 'nshaw973@gmail.com');

        expect(engineer.email).toEqual(email);
    });
    it('Employee must have a github username.', () => {

        const engineer = new Engineer();

        engineer.getRole();

        expect(engineer.role).toEqual('Engineer');
    });
});