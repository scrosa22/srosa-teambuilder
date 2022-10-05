import Employee from './employee.js'

export default class Engineer extends Employee {
    constructor(name, id, email, username, role) {
        super(name, id, email, username, role);

        this.username = username;
        this.role = role
    }

    getUsername() {
        return this.username;
    }

    getRole() {
        return this.role;
    };
};
