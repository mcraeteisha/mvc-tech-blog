// [
//     {
//         "name": "AJ",
//         "password": "password12345"
//     },
//     {
//         "name": "Cheryl",
//         "password": "password123456"
//     },
//     {
//         "name": "Kelsey",
//         "password": "password1234567"
//     }
// ]

const { User } = require('../models');

const userData = [
  {
    name: "AJ",
    password: "password12345",
  },
  {
    name: "Cheryl",
    password: "password123456",
  },
  {
    name: "Kelsey",
    password: "password1234567",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;