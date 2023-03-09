const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {

        super(employeeName, id, email, role);

        //giving the Manager office number 1 as opposed to creating a prompt.
        officeNumber = 1;
        this.officeNumber = officeNumber;

    }

    //This will be used to loop through the Employee class prompts with the appropiate names being called upon.
    getRole() {
        return this.role = 'Manager'
    }

}

module.exports = Manager;