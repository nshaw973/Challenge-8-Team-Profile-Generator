const fs = require('fs')

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const createCards = require('./src/htmlTemplate')

//contains all the staff objects to be used for later in teh HTML creation
const staff = []

//Starts questionare to get Managers name and info
async function getStaff() {

    const manager = new Manager();

    manager.getRole();

    await manager.getName();
    await manager.getId();
    await manager.getEmail();
    manager.officeNumber;

    staff.push(manager);

    getEngineer();

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
    
    //Loops through questionare until 3 engineers have populated, then it moves to the intern
    if(staff.length < 4) {
    getEngineer();
    } else {
        getIntern();
    } 

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


    //Moves to last step to generate the HTML file
    writeHTML();

}

function writeHTML() {

    const htmlData = createCards();

    //creates the html in the appropiate folder for the user
    fs.writeFile('./dist/index.html', htmlData, (err) => err 
    ? console.log(err) 
    : console.log('Generating an HTML file...'));
}

//Specifically exports the staff array, but as an object.
module.exports.staff = staff;

getStaff();