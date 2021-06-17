// const sequelize = require('../config/config');
// const { User, Post } = require('../models');

// const userData = require('./userData.json');
// const postData = require('./postData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   for (const post of postData) {
//     await Post.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
//   process.exit(0);
// };

// module.exports = seedDatabase();
const seedPosts = require('./postData');
const seedUser = require('./userData');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
