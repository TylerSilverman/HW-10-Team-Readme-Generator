// TODO: Write code to define and export the Employee class
//Can instantiate Employee instance
class Employee {
    constructor (name, email, id, role){
        this.name = name; //Can set name via constructor arguments
        this.email = email; //Can set email via constructor
        this.id = id; //Can set id via constructor argument
        this.role = role;
    };
    //getRole() should return "Employee"

    //Can get name via getName()
    getName() {
        return this.name;
    }
    // Can get email via getEmail()
    getEmail (){
        return this.email;
    }
    //Can get id via getId()
    getId(){
        return this.id;
    }
    getRole() {
        return this.role;
    }

};

module.exports = Employee; 