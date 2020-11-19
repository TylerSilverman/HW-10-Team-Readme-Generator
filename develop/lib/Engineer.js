const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, email, id, role, github){
        super(name, email, id, role);
        this.github = github; //github account 
    }  

    //function set GitHUb account via constructor with line 7
    getGithub () {
        return this.github;
    }

    //getRole() should return "Engineer"  //Override to return 
    getRole() {
        return "Engineer"; 
    }
}
module.exports = Engineer;