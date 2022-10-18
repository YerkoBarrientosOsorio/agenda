export class ContactModel {
    constructor(
        public id: number,
        public name: string,
        public phone: number,
        public email: string,
        public address: string,
        public rut: string,
        public creationDate: Date,
        public city: string,
        public birthDate: Date,
        public commune: string
    ){}
}