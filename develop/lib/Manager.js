const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email, "Manager");
        this.officeNumber = officeNumber; ///Can set office number via constructor argument 
    };
        //Can set office number via constructor argument line 7
    getOfficeNumber () {
        return this.officeNumber;
    }
    // getRole() should return "Manager"
    getRole () {
        return "Manager";//overriden to return Manager
    }
};

module.exports = Manager;