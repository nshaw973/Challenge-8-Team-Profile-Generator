const fs = require('fs')

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const createCards = require('./src/htmlTemplate');

//contains all the staff objects to be used for later in teh HTML creation
const staff = [];

//Starts questionare to get Managers name and info
async function getStaff() {

    const manager = new Manager();

    manager.getRole();

    await manager.getName();
    await manager.getId();
    await manager.getEmail();
    await manager.getOffice();

    staff.push(manager);

    addEngineer();

}

//Moves from manager to Engineer
async function getEngineer() {

    const engineer = new Engineer();

    engineer.getRole();

    await engineer.getName();
    await engineer.getId();
    await engineer.getEmail();
    await engineer.getGithub();

    staff.push(engineer);
    
    //Moves to see if user wants to add another Engineer?
    addEngineer();

}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add an Engineer?',
            name: 'confirm'
        }
    ]).then((data) => {

        if (data.confirm) {
            getEngineer();
        } else {
            addIntern();
        }
    })
}

//Gets interns info
async function getIntern() {

    const intern = new Intern();

    intern.getRole();

    await intern.getName();
    await intern.getId();
    await intern.getEmail();
    await intern.getSchool();

    staff.push(intern);

    //Moves to ask user if user wants to add another Intern
    addIntern();

}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add an Intern?',
            name: 'confirm'
        }
    ]).then((data) => {

        if (data.confirm) {
            getIntern();
        } else {
            writeHTML();
        }
    })
}

function writeHTML() {

    //Generates the HTML page and turns it into the htmlDatas value.
    //createCards() is from ./src/htmlTemplate
    const htmlData = createCards();

    //creates the html in the appropiate folder for the user
    fs.writeFile('./dist/index.html', htmlData, (err) => err 
    ? console.log(err) 
    : console.log('Generating an HTML file...'));
}

//Specifically exports the staff array, but as an object.
module.exports.staff = staff;

//initializes app
getStaff();