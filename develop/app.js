//code that was given to start:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const http = require("http");
//output code to create teh external html documents

// const server = http.createServer(handleRequest);

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");
//render code to return and render the information
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
//----------------------------------------------------//
//more functions that I have created are below:
  
// const util = require("util");
//----------------------------------------------------//
//-----------// code for addTeamMember to the list
const teamMember = [];

function addEngineer (){
    inquirer.prompt ([
        {
            type: "list",
            message: "Choose which to enter?",
            name: "directory",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            message: "Whats the Engineer's name?",
            name: "answerName",
        },
        {
            type: "input",
            message: "What is the Engineer EmailAddress?",
            name: "answerEmail",
        },
        {
            type: "input",
            message: "What is the Engineer ID Number?",
            name: "answerId",
        },
        {
            type: "input",
            message: "Whats Engineer GitHub?",
            name: "answerGithub",
        },
    ]).then(function(answer){
        const addEngineer = new Engineer (answer.answerName, answer.answerEmail, answer.answerId, answer.answerGithub)
        teamMember.push(addEngineer);
        if (answer.addingMoreMembers === true) {
            addIntern ();
            addEngineer ();
        }else{
            renderTeam();
            console.log("Generated Render Team");
        }
    })
}

function addIntern(){
    inquirer.prompt ([
        {
            type: "input",
            message: "Whats the Intern's name?",
            name: "answerName",
        },
        {
            type: "input",
            message: "What is the Intern EmailAddress?",
            name: "answerEmail",
        },
        {
            type: "input",
            message: "What is the Intern ID Number?",
            name: "answerId",
        },
        {
            type: "input",
            message: "Whats Engineer GitHub?",
            name: "answerSchool",
        },
    ]).then (function(answer){
        const addIntern = new Intern (answer.answerName, answer.answerEmail, answer.answerId, answer.answerSchool)
        teamMember.push(addIntern);
        if (answer.addingMoreMembers === true) {
             
        }else{
            renderTeam();
            console.log("Intern")
        }
    });
}

function runApplication() {
    inquirer.prompt ([
        {
                type: "input",
                message: "Whats the Manager's name?",
                name: "answerName",
        },
        {
                type: "input",
                message: "What is the Manager EmailAddress?",
                name: "answerEmail",
        },
        {
                type: "input",
                message: "What is the Manager ID Number?",
                name: "answerId",
        },
        {
            type: "input",
            message: "What is Manager Office Number?",
            name: "answerOfficeNumber",
        },
    ]).then(function(answer){
        const addManager = new Manager (answer.answerName, answer.answerEmail, answer.answerId, answer.answerOfficeNumber)
        teamMember.push(addManager);
        if (answer.addingMoreMembers === true) {
            
        }else{
            // renderTeam();
            console.log("Team Maanger")
            console.log(teamMember);
        }
    })

    
    
    //     .then(function (answer) {
    //             console.log(answer)
            
    //             //line 93- shows what file is going to be made from the questions anaswered 
    //             const OUTPUT_DIR = path.resolve(__dirname, "output");
            
    //             const outputPath = path.join(OUTPUT_DIR, "team.html");
    //             console.log(OUTPUT_DIR);
            
    //             fs.writeFileSync(outputPath, render(teamMember), "index.html", "UTF-8");
    // //         console.log(response)
    //         });
}
runApplication();
//     .then (function(answer){
//         if(answer.answer.role === "Engineer") {
//             runApplication (answer);
//         }else if (answer.answer.role === "Intern") {
//             addEngineer(answer);
//         }else{
//             addManager(answer)

//     //confirm all question answers since all answers are correct. Also confirming that there is no one else to include. 
//     // ].then(function(answers){
//     //     console.log(answers)
    

//     //     function writeFile () {
//     //         fs.writeFile(__dirname, data, function(error){
//     //             if(error){
//     //                 return console.log(error);
//     //             }
//     //             console.log("Information Saved" + __dirname);
//     //         })
//     //     }
//     // });
//     // const init = async () => {
//     //     const employee = []
//     //     let addEmployees = true;

//     // };
// After you have your html, you're now ready to create an HTML file using the HTML 
//             // const html = render(employee);

//             // return render();

