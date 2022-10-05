import Employee from './employee.js'

export default class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

        this.username = 'username';
        this.role = 'engineer'
    }

    getUsername() {
        return this.username;
    }

    getRole() {
        return this.role;
    };
};
