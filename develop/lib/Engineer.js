const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github; //github account 
    }  

    //getRole() should return "Engineer"  //Override to return 
    getRole() {
        return "Engineer"; 
    }


    //function set GitHUb account via constructor with line 7
    getGithub () {
        return this.github;
    }
}
// const engineer = new Engineer ("Tyler", 55, "test@gmail.com", "github-username");
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getGithub ();
// engineer.getRole ();

module.exports = Engineer;