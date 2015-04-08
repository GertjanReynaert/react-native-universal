class Contact {
  constructor(params) {
    this.avatar = params.avatar;

    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.fullName = this.fullName();

    this.company = params.company;

    this.phone = params.phone;
    this.cellphone = params.cellphone;

    this.email = params.email;
    this.emailWork = params.emailWork;

    this.address = params.address;
    this.zipcode = params.zipcode;
    this.city = params.city;
    this.country = params.country;

    this.birthday = params.birthday || new Date();
    this.displayBirthday = this._displayBirthday();
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  _displayBirthday() {
    return this.birthday.toLocaleDateString();
  }
}

module.exports = Contact;
