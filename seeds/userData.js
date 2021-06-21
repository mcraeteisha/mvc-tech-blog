const { User } = require('../models');

const userData = [
  {
    name: "AJ",
    email: "aj@email.com",
    password: "password12345",
  },
  {
    name: "Cheryl",
    email: "cheryl@email.com",
    password: "password123456",
  },
  {
    name: "Kelsey",
    email: "kelsey@email.com",
    password: "password1234567",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;