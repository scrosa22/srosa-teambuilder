import employee from './employee'

export default class manager extends employee {
    constructor(name, id, email, officeNumber) {        
        super(name, id, email)
        this.officeNumber = officeNumber
    }

        getRole(){
            return `manager`
        }
    }

