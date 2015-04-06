var Faker = require('faker');

class Contact {
  constructor() {
    this.avatar = Faker.image.avatar();

    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.firstName();
    this.fullName = this.fullName();

    this.company = Faker.company.companyName();

    this.phone = Faker.phone.phoneNumber();
    this.cellphone = Faker.phone.phoneNumber();

    this.email = Faker.internet.email();
    this.emailWork = Faker.internet.email();

    this.address = Faker.address.streetAddress();
    this.zipcode = Faker.address.zipCode();
    this.city = Faker.address.city();
    this.country = Faker.address.country();

    this.birthday = this._generateBirthday().toLocaleDateString();
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  _generateBirthday() {
    var from = new Date(1940, 5, 7, 9, 11, 0, 0);
    var to = new Date(2000, 6, 8, 10, 12, 0, 0);

    return Faker.date.between(from, to);
  }
}

module.exports = Contact;
