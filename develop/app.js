//code that was given to start:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const server = http.createServer(handleRequest);

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");
//render code to return and render the information
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
//-----------// code for addTeamMember to the list
const teamMember = [];

// function addIntern () {
//     var intern
//     inquirer.prompt () (
//     {
//             type: "input",
//             message: "What's the name?",
//             name: "answerName",
//     },
//     {
//             type: "input",
//             message: "What's the EmailAddress?",
//             name: "answerEmail",
//     },
//     {
//             type: "input",
//             message: "What's the ID Number?",
//             name: "answerId",
//     },
//     {
//             type: "input",
//             message: "What school did the intern attend?",
//             name: "answerSchool",
//     })
//     addIntern ();
// };

// function addEngineer () {
//     inquirer.prompt () ({
//         type: "input",
//         message: "What's the Engineer Github Account?",
//         name: "answerGithub",

//     })
// };

function addManager (){
    // var manager;
    console.log("addManagerFunction")
    inquirer.prompt([
    {
        type: "input",
        message: "What's the Manager's name?",
        name: "answerName",
    },
    {
            type: "input",
            message: "What's the Manager EmailAddress?",
            name: "answerEmail",
    },
    {
            type: "input",
            message: "What's the Manager ID Number?",
            name: "answerId",
    },
    {
            type: "input",
            message: "What is the Manager Office Number?",
            name: "answerOfficeNumber",
    }
]).then((answer) => {
    console.log("finihsed prompt", answer);
    var manager = new Manager (answer.answerName, answer.answerId, answer.answerEmail, answer.answerOfficeNumber);
    teamMember.push(manager);
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function runApplication() {
    console.log("teamBuilder")
    addManager();
    // const manager = addManager();
    // teamMember.push(manager);
    // const OUTPUT_DIR = path.resolve(__dirname, "output");   
    // const outputPath = path.join(OUTPUT_DIR, "team.html");
    // fs.writeFileSync(outputPath, render(teamMember), "UTF-8");

        // addEngineer ();
        // inquirer.prompt ([
        // {
        //         type: "list",
        //         message: "Choose which to enter?",
        //         name: "role",
        //         choices: ["Manager", "Engineer", "Intern"],
        // },
        // {
        //         type: "input",
        //         message: "What's the name?",
        //         name: "answerName",
        // },
        // {
        //         type: "input",
        //         message: "What's the EmailAddress?",
        //         name: "answerEmail",
        // },
        // {
        //         type: "input",
        //         message: "What's the ID Number?",
        //         name: "answerId",
        // },
        // }).then(function (answer) 
    // {
    //     const addManager = new Manager (answer.answerName, answer.answerEmail, answer.answerId, answer.answerOfficeNumber);
    //     teamMember.push(addManager);

    //     const addIntern = new Intern (answer.answerName, answer.answerEmail, answer.answerId, answer.answerSchool);
    //     teamMember.push(addIntern);

    //     const addEngineer = new Engineer (answer.answerName, answer.answerEmail, answer.answerId, answer.answerGithub);
    //     teamMember.push(addEngineer);

    //     console.log(answer)
    // };
};
runApplication();
//----------------------code is above-------