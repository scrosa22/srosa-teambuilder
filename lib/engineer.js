const employee = require('./employee');

export default class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

        this.role = 'engineer';
    }

    getUsername() {
        return this.username;
    }

    getRole() {
        return this.role;
    }
};
