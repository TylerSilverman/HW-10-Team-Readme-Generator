//code that was given to start:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//remmeber to make sure to install node modules folder (npm init -y) and also inquirer (npm i inquirer)
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const http = require("http");
//output code to create teh external html documents

// const server = http.createServer(handleRequest);

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");
//render code to return and render the information
const render = require("./lib/htmlRenderer");
//----------------------------------------------------//
//more functions that I have created are below:

const util = require("util");
// const generateContent = require('./util/generateFile');
//create for extra html documents 
// const generateMarkdownFile = require ("./generateMarkdownFile");
// const generateFile = util.promiseify(fs.generate);
// const writeFile = util.promiseify(fs.writeFile);

//-----------------------------------------------------//
//-----------// code for addTeamMember to the list
const teamMember = [];
//function toq uestion  the user for input choices for the employeeQuestions:

// function runApplication () {
function addingMoreMembers (){

    //prompting the user to choose
    inquirer.prompt ([
        {
            type: "list",
            message: "Choose which to enter?",
            name: "Directory",
            choices: ["Manager", "Engineer", "Intern", "Return"]
        },
        //prompting to enter name class employee
        {
            type: "input",
            message: "Whats the candidate name?",
            name: "name",
        },
        //prompting to enter email class employee
        {
            type: "input",
            message: "What is the email address?",
            name: "email",
        },
        //prompting to enter ID number class employee
        {
            type: "input",
            message: "What is the ID Number?",
            name: "idNumber",
        },
        //prompting to enter office Number of the Managaer class
        {
            type: "input",
            message: "What is your Office Number?",
            name: "officeNumber",
        },
        //prompting to enter Github Account of the Engineer class
        {
            type: "input",
            message: "Whats your gitHub Name?",
            name: "github",
        },
        //prompting to get the school information of the Intern class
        {
            type: "input",
            message: "What School did you attend?",
            name: "school",
        },
        {
            type: "confirm",
            message: "Would you like to add more?",
            name: "addingMoreMembers",
        },
    ]).then(function(response){
        const newManager  = new Manager (response.name, response.email, response.id, response.role) 
            teamMember.push(newManager);
        if (response.addingMoreMembers === true) { //this is the function asking if it want to add another member. 
           return addingMoreMembers();
        } else {
            renderTeam ();
            console.log("check function!,file didnt generate")
        };
    })
};
addingMoreMembers ();

function renderTeam ()
{
    function renderTeam (){
                if (!fs.existsSync(outputPath)){ 
                    fs.mkdirSync(OUTPUT_DIR);
                }
                fs.writeFile(outputPath, render(teamMember), (error) => {
                    if (error) {
                        throw err;
                }
                console.log("file generated")
            })
        }
}
// 


    // ]).then(function (response){
    //     console.log (response)

    //     const generate = "output/team.html";

    //     const content = generateContent(response);

    //     fs.

    // )};
    


            // {type: "input", message: "This is line 29-Please confirm both answers ", name: "managerName" },
            // {type: "input", message: "What is Id Number", name: "managerId" },
            // {type: "input", message: "managerEmail", name: "What is the email address?" },
            // {type: "input", message: "managerOfficeNumber", name: "What is the office number?" },
            //this the functions for the manager 
        // ).then (response => {
        //     const manager = new Manager (response.managerName, response.managerId, response.managerEmail, response.officeNumber);
        //     teamMember.push(manager);
        //     addingMoreMembers();

        //function for the Engineer questions 
        // function getEngineer (){
        //     inquirer.prompt ([
        //         // {type: "input", message: "engineerName", name: "What is Engineer's Name?" },
        //         {type: "input", message: "managerEmail", name: "What is the email address?" },
        //         {type: "input", name: "engineerId", message: "What is the ID Number?"},
        //         {type: "input", name: "github", message: "What is your github username?"},
        //     ]).then(response => {
        //         const engineer = new Engineer (response.engineerName, response.managerEmail, response.engineerId, response.github);
        //         teamMember.push(engineer);
        //         addingMoreMembers();
        //         // id.push(response.engineerId);
        //     })
        // }

        //function fot the intern 
        // function getIntern () {
        //     
        
        //function to add more memebers to any section 
        //this is the first thing that is prompted/ 
        // function addingMoreMembers (){
        //     inquirer.prompt (
        //         {
        //             type: "rawlist",//only allowed one choice
        //             name: "position",
        //             choices: ["Manager", "Engineer", "Intern"], // choice selection
        //             message: "Choose which to enter?", //which selection is choosen
        //         }
        //     );
                // }).then(response => {
        //         // const role = response.position;
        // if (role == "manager"){
        //             getManager ();
        //         }else if (role == "engineer"){
        //             getEngineer ();
        //         } else if (role == "intern"){
        //         //     getIntern ();
        //         inquirer.prompt ([
        //             {   type: "input", 
        //                 message: "internName", 
        //                 name: "What is Intern's Name?" 
        //             },
        //             {   type: "input", 
        //                 name: "internId", 
        //                 message: "What is the ID Number?"
        //             },
        //             {   type: "input", 
        //                 message: "internEmail", 
        //                 name: "What is the email address?" 
        //             },
        //             {   type: "input", 
        //                 name: "school", 
        //                 message: "What school did you attend?"
        //             },
        //                 ]).then(response => {
        //                     const intern = new Intern (response.internName, response.internId, reponse.internEmail, response.school);
        //                     teamMember.push(intern);
        //                     addingMoreMembers();
        //                     //id.push(response.internId);
        //                 })
        //             }
        //this prompts to ask which selection to choose from
    //     addingMoreMembers ();
    
    //     function renderTeam (){
    //         if (!fs.existsSync(outputPath)){ 
    //             fs.mkdirSync(OUTPUT_DIR);
    //         }
    //         fs.writeFile(outputPath, render(teamMember), (error) => {
    //             if (error) {
    //                 throw err;
    //         }
    //         console.log("Did this work?")
    //     })
    // }
    //this should be the last thing after the function is closed to actually run the application questions 
    // runApplication ();

    //confirm all question answers since all answers are correct. Also confirming that there is no one else to include. 
    // ].then(function(answers){
    //     console.log(answers)
