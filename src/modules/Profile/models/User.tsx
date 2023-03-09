export class User {
    fullName: string;
    dateOfBirth: string;
    registeredDate: string;
    cellphone: string;
    phone: string;
    city: string;
    state: string;
    country: string;
    email: string;
    username: string;
    photo: string;

    public constructor (
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        registeredDate: string,
        cellphone: string,
        phone: string,
        city: string,
        state: string,
        country: string,
        email: string,
        username: string,
        photo: string
    ) {
        this.fullName = `${firstName} ${lastName}`;
        this.dateOfBirth = new Date(dateOfBirth).toJSON().slice(0, 10);
        this.registeredDate = new Date(registeredDate).toJSON().slice(0, 10);
        this.cellphone = cellphone;
        this.phone = phone;
        this.city = city;
        this.state = state;
        this.country = country;
        this.email = email;
        this.username = username;
        this.photo = photo;
    }
}