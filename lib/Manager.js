const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {

        super(employeeName, id, email);
        
        this.officeNumber = officeNumber;

    }
}

module.exports = Manager;