const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//need to make an const generateOutput = require("./output/team.html")

//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateFile = require("generateFile");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//file to create the html document, found in the develop folder in the lib  folder
const render = require("./lib/htmlRenderer");


//function toq uestion  the user for input choices for the employeeQuestions:
const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "What is your name?",
        choices: ["Engineer", "Intern", "Manager"],
    },

    { type: "input", message: "What is your email?", name: "email" },
    { type: "input", message: "What is your name?", name: "Name" },
    { type: "input", message: "What is your Id # Number?", name: "idNumber" },
    console.log(employeeQuestions)
];
//function to questions the user for input choices for the managerQuestions:
const managerQuestions = [
    {name: "officeNumber", message: "Whats the Manager's Office Number >"},
    console.log(managerQuestions),
];

//function to questions the user for input choices for the engineerQuestions:
const engineerQuestions = [
    { name: "github", message: "Who Contributed github:"},
    console.log(engineerQuestions),
];

//function to questions the user for input choices for the internQuestions:
const internQuestions = [
    { name: "school" , message: "Which Intern School did you attend:" },
    console.log(internQuestions),
];

//confirm all question answers since all answers are correct. Also confirming that there is no one else to include. 
const confirmQuestions = [
    {
        type: "confrim",
        name: "adding",
        message: "IS there more information you want to add:?"
    },
    console.log(confirmQuestions)
].then(function(answers){
    console.log(answers)

    const outputPath = "output/team.html";
    const content = 

    fs.writeFile(outputPath, content, (err) =>
    err ? console.log(err) : console.log("Information Saved")
    );
});

// need to create a function 

const init = async () => [
    const allEmployee = []
    let addEmployees = true;

    while (addEmployees) {
        const {name, id, email, role} = await inquirer.prompt (employeeQuestions);

        //questions about the manager 
        if (role === "Manager"){
            const {officeNumber} = await inquirer.prompt(managerQuestions); 

            //pushing out an obsject of the manager array. 
            allEmployee.push(new Manager(name, id, email, officeNumber));

            //creating the else if statement for manager  to compare to the other classes. 
        }else if (role === "Engineer") {
            const {github} = await inquirer.prompt (engineerQuestions);

            allEmployee.push(new Engineer(name, id, email, github));

            //creating an else statement for the engineer 
        }else { 
            const{school} = await inquirer.prompt (internQuestions);

            //creating the else statement for the intern. 
            allEmployee. push(new Intern(name, id, email, school));
        };
    };
;
// returned from the `render` function. 
return render();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML 

// Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
