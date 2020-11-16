// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name,id, email, getName, getId, getEmail, getRole){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName() = getName();
        this.getId() = getId();
        this.getEmail() = getEmail();
        this.getRole() = getRole(); // returns Employee
    };
};

module.exports = Intern; 