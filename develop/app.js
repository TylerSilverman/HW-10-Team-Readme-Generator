//code that was given to start:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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
]).then((answerIntern) => {
    console.log("Intern-Member Created", answerIntern);
    const intern = new Intern (answerIntern.answerName, answerIntern.answerId, answerIntern.answerEmail, answerIntern.answerSchool);
    //     teamMember.push(addEngineer);
    teamMember.push(intern);
    addMoreMembers();
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function addEngineer (){
    // var engineer;
    console.log("addEngineerFunction")
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
    console.log("Engineer-Member Created", answer);
    const addEngineer = new Engineer (answer.answerName, answer.answerId, answer.answerEmail, answer.answerGithub);
    //     teamMember.push(addEngineer);
    teamMember.push(addEngineer);
    addMoreMembers();
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function addManager(){
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
    console.log("Manager-Member Created", answer);
    var manager = new Manager (answer.answerName, answer.answerId, answer.answerEmail, answer.answerOfficeNumber);
    teamMember.push(manager);
    addMoreMembers();
    const OUTPUT_DIR = path.resolve(__dirname, "output");   
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
})
}

function manager(){
    inquirer.prompt([
        {
            type: "list",
            message: "Choose which to enter?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        }

    ])

}

function addMoreMembers() {
    console.log("addMoreMembers")
    inquirer.prompt ([
        {
            type: "confirm",
            message: "Do you want to add More Members?",
            name: "confirm",
            choices: ["Yes", "No"],
        },
        {
            type: "list",
            message: "Choose which to enter?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ]).then((answer) => {
        console.log(answer)
        addManager();
        // addEngineer();
        // addIntern();
    })
}




function runApplication() {
    console.log("runApplication generated!");
    addMoreMembers();
    // addManager();
    // addEngineer();
    // addIntern();

}

runApplication();
//----------------------code is above-------