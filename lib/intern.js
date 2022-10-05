import Employee from './employee.js'

export default class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email, school, role);
        this.school = school
        this.role = role
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
};

