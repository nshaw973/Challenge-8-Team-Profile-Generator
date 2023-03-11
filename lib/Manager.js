const Employee = require('./Employee')
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {

        super(employeeName, id, email, role);

        //giving the Manager office number 1 as opposed to creating a prompt.
        officeNumber = 1;
        this.officeNumber = officeNumber;

    }

    async getOffice() {
        await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Manager's office number?: `,
                name: 'office',
            }
        ]).then((data) => {
            this.officeNumber = data.office.trim();;
        })
    }

    //This will be used to loop through the Employee class prompts with the appropiate names being called upon.
    getRole() {
        return this.role = 'Manager'
    }

}

module.exports = Manager;