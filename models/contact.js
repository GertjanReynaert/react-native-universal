var Faker = require('faker');

class Contact {
  constructor() {
    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.firstName();
    this.avatar = Faker.image.avatar();
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = Contact;
