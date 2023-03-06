const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('Manager must have a name, id, email, and office number', () => {
        
        const id = 3
        const email = 'nshaw973@gmail.com'

        const engineer = new Engineer('David', id, email, 'nshaw973');

        expect(engineer.employeeName).toEqual('David');
        expect(engineer.id).toEqual(3);
        expect(engineer.email).toEqual('nshaw973@gmail.com');
        expect(engineer.github).toEqual('nshaw973');
    });
});