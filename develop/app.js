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

function addIntern (){
    // var engineer;
    // console.log("addInternFunction")
    inquirer.prompt([
    {
        type: "input",
        message: "What's the Intern's name?",
        name: "answerName",
    },
    {
            type: "input",
            message: "What's the Intern EmailAddress?",
            name: "answerEmail",
    },
    {
            type: "input",
            message: "What's the Intern ID Number?",
            name: "answerId",
    },
    {
            type: "input",
            message: "What school did you attend",
            name: "answerSchool",
        
    },
]).then((answer) => {
    console.log("finished Intern Prompt", answer);
    const intern = new Intern (answer.answerName, answer.answerEmail, answer.answerId, answer.answerSchool);
    //     teamMember.push(addEngineer);
    teamMember.push(intern);
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function addEngineer (){
    // var engineer;
    // console.log("addEngineerFunction")
    inquirer.prompt([
    {
        type: "input",
        message: "What's the Engineer's name?",
        name: "answerName",
    },
    {
            type: "input",
            message: "What's the Engineer EmailAddress?",
            name: "answerEmail",
    },
    {
            type: "input",
            message: "What's the Engineer ID Number?",
            name: "answerId",
    },
    {
            type: "input",
            message: "What's the Engineer Github Account?",
            name: "answerGithub",
        
    },
]).then((answer) => {
    console.log("finished Engineer Prompt", answer);
    const engineer = new Engineer (answer.answerName, answer.answerEmail, answer.answerId, answer.answerGithub);
    //     teamMember.push(addEngineer);
    teamMember.push(engineer);
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function addManager (){
    // var manager;
    // console.log("addManagerFunction")
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
    addEngineer();
    addIntern();
        // inquirer.prompt ([
        // {
        //         type: "list",
        //         message: "Choose which to enter?",
        //         name: "role",
        //         choices: ["Manager", "Engineer", "Intern"],
        // },
        //
        // }).then(function (answer) 
    // {const addIntern = new Intern (answer.answerName, answer.answerEmail, answer.answerId, answer.answerSchool);
    //     teamMember.push(addIntern);
}
runApplication();
//----------------------code is above-------