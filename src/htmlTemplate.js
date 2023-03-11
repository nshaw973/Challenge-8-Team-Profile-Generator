const staff = require('../index');

//This creates the cards for each employee
function createCards() {

  //cardData will be where all the cards are stored so that it can be injected directly in the html page template
  const cardData = [];
  //this is basically taking away the staff object and stepping down a step to go directly to the staff array that was imported from the index.js
  const fullStaff = staff.staff;
    
  //loops through to generate each personalized card for the employees
  for (let i = 0; i < fullStaff.length; i++) {
  
    const staffValues = Object.values(fullStaff[i])

    //Checks to see what current roles extra info has, in order to generate the proper html element.
    function staffExtra () {
      if ('github' in fullStaff[i]) {
        return `<li class="list-group-item">Github: <a href="https://github.com/${staffValues[4]}">${staffValues[4]}</a></li>`
      } else if ('school' in fullStaff[i]) {
        return `<li class="list-group-item">School ${staffValues[4]}</li>`
      } else {
        return `<li class="list-group-item">Office: ${staffValues[4]}</li>`
      }
    }

    const cardTemplate = `
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card mt-4">
            <div class="card-header" style="background-color: lightgreen;">
              <h4>${fullStaff[i].employeeName}</h4>
              <h4>${fullStaff[i].role}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${fullStaff[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${fullStaff[i].email}">${fullStaff[i].email}</a></li>
              ${staffExtra()}
            </ul>
          </div>
        </div>
      </div>\n`;
  
    cardData.push(cardTemplate);
  
      };
    //The main html page with super basic styling from bootstrap
    const htmlTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Company Staff</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  
    </head>
  
    <header class="row">
      <div class="col-md-12">
        <h1 style="background-color: lightgreen; height: 100px; width: 100%; text-align: center; padding-top: 15px;" class="col-md-12">My Staff</h1>
      </div>
    </header>
  
    <body>
      <div class="container-fluid" id="card=container">
      <!-- Staff Cards -->
      ${cardData.join('').trim()}
      <!-- Staff Cards -->
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  
    </body>
  </html>`
  return htmlTemplate.trim();
  }

  //exporting the function so that it can be called in the index.js when all the prompts for the employees have been answered.
  module.exports = createCards;