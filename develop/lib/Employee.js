// TODO: Write code to define and export the Employee class
//Can instantiate Employee instance
class Employee {
    constructor (name, id, email){
        this.name = name; //Can set name via constructor arguments
        this.id = id; //Can set id via constructor argument
        this.email = email; //Can set email via constructor argument
    };
    //getRole() should return "Employee"

    //Can get name via getName()
    getName() {
        return this.name;
    }
    //Can get id via getId()
    getId(){
        return this.id;
    }
    // Can get email via getEmail()
    getEmail (){
        return this.email;
    }
    getRole() {
        return "Employee";
    }

};

module.exports = Employee; 