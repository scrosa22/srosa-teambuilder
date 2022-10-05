const Employee = require('./employee');

export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.role = 'intern';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
};

