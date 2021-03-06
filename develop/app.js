////make sure the terminal is in the /develop(main), and then in the terminal type in:      node app. js to begin. 

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
//-----------// code for addTeamMember to the list
const teamMember = [];

function addIntern() {
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
    const intern = new Intern(answerIntern.answerName, answerIntern.answerId, answerIntern.answerEmail, answerIntern.answerSchool);
    teamMember.push(intern);
    addMoreMembers();
  });
}
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the Engineer Name",
      name: "answerName",
    },
    {
      type: "input",
      message: "What's the Email Address?",
      name: "answerEmail",
    },
    {
      type: "input",
      message: "What's the ID Number?",
      name: "answerId",
    },
    {
      type: "input",
      message: "What's the Engineer Github Account?",
      name: "answerGithub",
    },
  ]).then((answer) => {
    const addEngineer = new Engineer(answer.answerName, answer.answerId, answer.answerEmail, answer.answerGithub);
    teamMember.push(addEngineer);
    addMoreMembers();
  });
}
function addManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "Name of person inputting the information",
      name: "answerName",
    },
    {
      type: "input",
      message: "Enter a vaild email address?",
      name: "answerEmail",
    },
    {
      type: "input",
      message: "What's the ID Number?",
      name: "answerId",
    },
    {
      type: "input",
      message: "Enter contact information?",
      name: "answerOfficeNumber",
    }
  ]).then((answer) => {
    const manager = new Manager(answer.answerName, answer.answerId, answer.answerEmail, answer.answerOfficeNumber);
    teamMember.push(manager);
    addMoreMembers();
  })
}
function addMoreMembers() {
  inquirer.prompt([
    {
      type: "list",
      message: "Add another team member?",
      name: "role",
      choices: ["Engineer", "Intern", "Submit to Generate Output File"],
    }
  ]).then((answer) => {
    if (answer.role === "Engineer") {
      addEngineer();
    } else if (answer.role === "Intern") {
      addIntern();
    } else {
      const OUTPUT_DIR = path.resolve(__dirname, "output");
      const outputPath = path.join(OUTPUT_DIR, "team.html");
      fs.writeFileSync(outputPath, render(teamMember), "UTF-8");
    }
  })
}
function runApplication() {
  addManager();
}
runApplication();