const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {

        super(employeeName, id, email, role);

        officeNumber = 1;
        this.officeNumber = officeNumber;

    }

    getRole() {
        return this.role = 'Manager'
    }

}

module.exports = Manager;