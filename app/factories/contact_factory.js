var Faker = require('faker');
var Contact = require('../models/contact');

class ContactFactory {
  constructor() {}
  create() {
    var params = {
      avatar: Faker.image.avatar(),
      firstName: Faker.name.firstName(),
      lastName: Faker.name.firstName(),
      company: Faker.company.companyName(),
      phone: Faker.phone.phoneNumber(),
      cellphone: Faker.phone.phoneNumber(),
      email: Faker.internet.email(),
      emailWork: Faker.internet.email(),
      address: Faker.address.streetAddress(),
      zipcode: Faker.address.zipCode(),
      city: Faker.address.city(),
      country: Faker.address.country(),
      birthday: this._generateBirthday()
    };

    return new Contact(params);
  }

  createList(amount) {
    var results = [];
    amount = amount || 10;
    for(var i = 0; i < amount; i++) {
      results.push(this.create());
    }

    return results;
  }

  _generateBirthday() {
    var from = new Date(1940, 5, 7, 9, 11, 0, 0);
    var to = new Date(2000, 6, 8, 10, 12, 0, 0);

    return Faker.date.between(from, to);
  }
}

module.exports = ContactFactory;
