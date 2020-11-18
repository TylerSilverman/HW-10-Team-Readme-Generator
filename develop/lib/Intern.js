const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name,id, email, school){
        super (name, id, email);
        this.school = school; //Can set school via constructor
    };

    //Can get school via getSchool() line 6
    getSchool () {
        return this.school;
    }
    //getRole() should return "Intern"
    getRole () {
        return "Intern"; //Overridden to return Intern
    }
};

// const intern = new Intern ("Tyler", 55, "test@gmail.com", "FSU");
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getSchool();
// intern.getRole ();

module.exports = Intern; 