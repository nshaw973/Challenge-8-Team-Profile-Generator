const Employee = require('./Employee')
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(employeeName, id, email, role, github) {

        super(employeeName, id, email, role);

        this.github = github;

    }

    async getGithub() {
        await inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Engineer's github?: `,
                name: 'github',
            }
        ]).then((data) => {
            this.github = data.github.trim();;
        })
    }
    
    //gets Engineer role as Engineer. will be used in the employee prompts
    getRole() {
        return this.role = 'Engineer'
    }
}

module.exports = Engineer;