const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./util/generateFile');

inquirer.prompt([
    {
        // #3table of contents
        type: "list",
        message: "Table of Contents?",
        name: "Contents",
        choices: ["Description", "Installation", "Usage", "Contribution", "Tests", "License", "Questions"],
    },
    {
        //#1name of project
        type: "input",
        message: "What is the name of your project",
        name: "Title",
    },
    {
        //#2decsription of project
        type: "input",
        message: "What is the description of your project",
        name: "Description",
    },
    {
        //#4installation of project
        type: "input",
        message: "What install instructions were used? If None were used, write NONE.",
        name: "Installation",
    },
    {
        //#5usage for the project- Done
        type: "input",
        message: "What usage did you use for the project?",
        name: "Usage",
    },
    {
        //#6any liceneses used for project - Done
        type: "list",
        message: "What licenses did you install?",
        name: "Licenses",
        choices: [" MIT", "APACHE 2.0", "GitHub", "GPL 3.0"],
    },
    {
        //#7any contributions used for project
        type: "input",
        message: "Who contributed to create the project?",
        name: "Contributor",
    },
    {
        //#8 types of package names 
        type: "checkbox",
        message: "What type of package names did you use for the project?",
        name: "Test",
        choices: ["APM", "Bower", "CRAN/METACRAN", "PyPI"],
    },
    {
        //#9If you have Questions leave contact information- Done
        type: "input",
        message: "If you have questions, please leave your contact information.",
        name: "Questions",
    },
    {
        //github username- Done
        type: "input",
        message: "What is your github username?",
        name: "Username",
    },
    {
        //Github Email Address- Done
        type: "input",
        message: "What is your github email address?",
        name: "Email",
    },
    
    //function to create the information saved on another filename
]).then(function (answers) {
    console.log(answers)

    //line 93- shows what file is going to be made from the questions anaswered 
    const fileName = "output/test.html";

    const content = generateContent(answers);

    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log("Information Created a README.md")
    );
});