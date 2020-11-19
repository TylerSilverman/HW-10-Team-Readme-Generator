const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, email, id, school){
        super (name, email, id, "Intern");
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

module.exports = Intern; 