const inquirer = require('inquirer');


class Employee {
    constructor(employeeName, id, email, role) {
        
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        this.role = role

    }

    //Just to get this classes specific role.
    getRole() {
        return this.role = 'Employee'
    }

    //gets the Class calling this methods for their name through inquirer
    async getName() {
        await inquirer
        .prompt([

            {
                type: 'input',
                message: `What is the ${this.role}'s name?: `,
                name: 'name',
            }

        ]).then((data) => {
            //incase the user doesn't use an uppercase for teh first letter, this takes care of that.
            this.employeeName = data.name.trim().charAt(0).toUpperCase() + data.name.trim().slice(1);
        })
    }

    //gets the Class calling this methods for their ID through inquirer
    async getId() {
        await inquirer
        .prompt([

            {
                type: 'input',
                message: `What is the ${this.role}'s ID?: ` ,
                name: 'id',
            }

        ]).then((data) => {
            this.id = data.id.trim();
        })
    }
    
    //gets the Class calling this methods for their email through inquirer
    async getEmail() {
        await inquirer
        .prompt([

            {
                type: 'input',
                message: `What is ${this.role}'s email?: `,
                name: 'email',
            }

        ]).then((data) => {
            this.email = data.email.trim();;
        })
    }

}



module.exports = Employee;