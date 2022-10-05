const Employee = require('./employee');

export default class Intern extends mployee {
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

