const Employee = require('./Employee')
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(employeeName, id, email, role, school) {

        super(employeeName, id, email, role);

        this.school = school;

    }

    async getSchool() {
        await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Intern's school?: `,
                name: 'school',
            }
        ]).then((data) => {
            this.school = data.school.trim();;
        })
    }
    
    //gets interns role as intern. will be used in the employee prompts
    getRole() {
        return this.role = 'Intern';
    }
}

module.exports = Intern;