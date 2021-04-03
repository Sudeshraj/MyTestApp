export class User {
    constructor(
        public name : String,
        public nic : String,
        public mobile : number,
        public monthlySalary : number | any,
        public retiredDate : Date,
        public yearsOfService : number,
        public pension : number | any

    ){}
}
