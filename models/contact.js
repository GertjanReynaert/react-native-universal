var Faker = require('faker');

class Contact {
  constructor() {
    this.avatar = Faker.image.avatar();

    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.firstName();
    this.fullName = this.fullName();

    this.address = Faker.address.streetAddress();
    this.zipcode = Faker.address.zipCode();
    this.city = Faker.address.city();

    this.phone = Faker.phone.phoneNumber();
    this.cellphone = Faker.phone.phoneNumber();

    this.email = Faker.internet.email();
    this.emailWork = Faker.internet.email();
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = Contact;
