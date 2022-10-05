import Employee from './employee.js'

export default class Engineer extends Employee {
    constructor(name, id, email, gitusername, role) {
        super(name, id, email, gitusername, role);

        this.gitusername = gitusername;
        this.role = role
    }

    getUsername() {
        return this.gitusername;
    }

    getRole() {
        return this.role;
    };
};
