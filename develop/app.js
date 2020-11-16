const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//need to make an const generateOutput = require("./output/team.html")

//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//file to create the html document, found in the develop folder in the lib  folder
const render = require("./lib/htmlRenderer");


//function toq uestion  the user for input choices for the employeeQuestions:
const employeeQuestions = [
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "Name",
    },
    {
        type: "input",
        message: "What is your id number?",
        name: "id Number",
    }
]
//function to questions the user for input choices for the managerQuestions:
const managerQuestions = [
    {name: "officeNumber", message: "Whats the Manager's Office Number >"},
    console.log(managerQuestions),
],

//function to questions the user for input choices for the engineerQuestions:
const engineerQuestions = [
    { name: "github", message: "Who Contributed github:"},
    console.log(engineerQuestions),
]

//function to questions the user for input choices for the internQuestions:
const internQuestions = [
    { name: "school" , message: "Which Intern School did you attend:" },
    console.log(internQuestions),
]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML


// returned from the `render` function. 
// return render(); 


// Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
const outputPath = "output/team.html";

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
