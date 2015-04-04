var Faker = require('faker');

class Contact {
  constructor() {
    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.firstName();
    this.avatar = Faker.image.avatar() || "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/48.jpg";
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = Contact;
