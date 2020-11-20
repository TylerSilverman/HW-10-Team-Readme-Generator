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

function runApplication() {
    inquirer.prompt ([
        {
            type: "confirm",
            message: "Do you want to add another?",
            name: "addMore",
            choices: ["Yes", "No"],
        },
        {
            type: "list",
            message: "Choose which to enter?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
                type: "input",
                message: "What's the name?",
                name: "answerName",
        },
        {
                type: "input",
                message: "What's the EmailAddress?",
                name: "answerEmail",
        },
        {
                type: "input",
                message: "What's the ID Number?",
                name: "answerId",
        },
        {
            type: "input",
            message: "What is the Manager Office Number?",
            name: "answerOfficeNumber",
        },
        {
            type: "input",
            message: "What's the Engineer Github Account?",
            name: "answerGithub",
        },
        {
        type: "input",
        message: "What school did the intern attend?",
        name: "answerSchool",
        },
    ]).then(function (answer) 
    {
        const addManager = new Manager (answer.answerName, answer.answerEmail, answer.answerId, answer.answerOfficeNumber);
        teamMember.push(addManager);

        const addIntern = new Intern (answer.answerName, answer.answerEmail, answer.answerId, answer.answerSchool);
        teamMember.push(addIntern);

        const addEngineer = new Engineer (answer.answerName, answer.answerEmail, answer.answerId, answer.answerGithub);
        teamMember.push(addEngineer);

        console.log(answer)
        const OUTPUT_DIR = path.resolve(__dirname, "output");
                
         const outputPath = path.join(OUTPUT_DIR, "team.html");
        console.log(OUTPUT_DIR);
                
        fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
    });
};
runApplication();
//----------------------code is above-------//



