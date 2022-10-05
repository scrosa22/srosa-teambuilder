import employee from './employee'

class Manager extends employee {
    constructor(name, id, email, officeNumber) {        
        super(name, id, email)
        this.officeNumber = officeNumber
    }

        getRole(){
            return `Manager`
        }
    }

module.exports = Manager