const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {

        super(employeeName, id, email);

        this.github = github;

    }
}

module.exports = Engineer;