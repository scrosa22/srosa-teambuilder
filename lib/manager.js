import Employee from './employee'

export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {        
        super(name, id, email)
        this.officeNumber = officeNumber
    }

        getRole(){
            return `manager`
        }
    }

