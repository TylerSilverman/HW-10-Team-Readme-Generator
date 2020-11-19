
inquirer.prompt (
            {type: "input", message: "This is line 29-Please confirm both answers ", name: "managerName" },
            // {type: "input", message: "What is Id Number", name: "managerId" },
            // {type: "input", message: "managerEmail", name: "What is the email address?" },
            // {type: "input", message: "managerOfficeNumber", name: "What is the office number?" },
            //this the functions for the manager 
        ).then (response => {
            const manager = new Manager (response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            teamMember.push(manager);
            addingMoreMembers();

            
        })
        //function fot the intern 
        function getIntern () {
            inquirer.prompt ([
                {type: "input", message: "internName", name: "What is Intern's Name?" },
                { type: "input", name: "internId", message: "What is the ID Number?"},
                {type: "input", message: "internEmail", name: "What is the email address?" },
                {type: "input", name: "school", message: "What school did you attend?"},
            ]).then(response => {
                const intern = new Intern (response.internName, response.internId, reponse.internEmail, response.school);
                teamMember.push(intern);
                addingMoreMembers();
                //id.push(response.internId);
            })
        }
        
        //function to add more memebers to any section 
        //this is the first thing that is prompted/ 
        function addingMoreMembers (){
            inquirer.prompt (
                {
                    type: "rawlist",//only allowed one choice
                    name: "position",
                    choices: ["Manager", "Engineer", "Intern"], // choice selection
                    message: "Choose One?", //which selection is choosen
                }
            ).then(response => {
                const role = response.position;
                if (role == "manager"){
                    getManager ();
                }else if (role == "engineer"){
                    getEngineer ();
                } else if (role == "intern"){
                    getIntern ();
                } else if (role == "return"){ //this is for the next function to createTeam and will be able to create the placeCards
                    renderTeam(); 
                }
            addingMoreMembers ();
        }
    
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
    // //this should be the last thing after the function is closed to actually run the application questions 
    // runApplication ();

    //confirm all question answers since all answers are correct. Also confirming that there is no one else to include. 
    // .then(function(answers){
    //     console.log(answers)
    

    //     function writeFile () {
    //         fs.writeFile(__dirname, data, function(error){
    //             if(error){
    //                 return console.log(error);
    //             }
    //             console.log("Information Saved" + __dirname);
    //         })
    //     }
    // });

    // const init = async () => {
    //     const employee = []
    //     let addEmployees = true;

    // };
                /// / After you have your html, you're now ready to create an HTML file using the HTML 
            // const html = render(employee);

            //// After the user has input all employees desired, call the `render` function (required/// above) and pass in an array containing all employee objects; the `render` function will//generate and return a block of HTML including templated divs for each employee!//// returned from the `render` function. 
            // return render();
//         // After you have your html, you're now ready to create an HTML file using the HTML
//         // returned from the `render` function. Now write it to a file named `team.html` in the
//         // `output` folder. You can use the variable `outputPath` above target this location.
//         // Hint: you may need to check if the `output` folder exists and create it if it
//         // does not
    // init ();


//         // Write code to use inquirer to gather information about the development team members,
//         // and to create objects for each team member (using the correct classes as blueprints!)

//         // Be sure to test out each class and verify it generates an
//         // object with the correct structure and methods. This structure will be crucial in order
//         // for the provided `render` function to work!

//         // / Write code to use inquirer to gather information about the development team members,
//         // and to create objects for each team member (using the correct classes as blueprints!)

//         // After the user has input all employees desired, call the `render` function (required
//         // above) and pass in an array containing all employee objects; the `render` function will
//         // generate and return a block of HTML including templated divs for each employee!

//         // After you have your html, you're now ready to create an HTML file using the HTML
//         // returned from the `render` function. Now write it to a file named `team.html` in the
//         // `output` folder. You can use the variable `outputPath` above target this location.
//         // Hint: you may need to check if the `output` folder exists and create it if it
//         // does not.

//         // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
//         // and Intern classes should all extend from a class named Employee; see the directions
//         // for further information. Be sure to test out each class and verify it generates an
//         // object with the correct structure and methods. This structure will be crucial in order
//         // for the provided `render` function to work! 