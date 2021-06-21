const { Post } = require('../models');

const postData = [
  {
    title: "AWC vs. GCP",
    body: "There are several companies offering services in the cloud computing space, but we're going to focus on two of the more high-profile platforms: Amazon Web Services and Google Cloud Platform."
  },
  {
    title: "Scrum vs. Kanban",
    body: "There are many different agile frameworks, but we'll focus on two of the more popular approaches: Scrum and Kanban. Lear about the history and philosophy behind these two methodologies!"
  },
  {
    title: "GitLab vs. GitHub",
    body: "While both platforms offer Git repository hosting, issue tracking, and integrations, there are important differences in cost, popularity, security, and philosophy. Get a quick backgrounder on both platforms!"
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;