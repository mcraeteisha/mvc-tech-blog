# mvc-tech-blog
The Tech Blog is a CMS-style blog that allows developers to share tech content with other developers and techies. Users have the ability to publish posts, edit and update posts, view other users' posts, and make comments. 

## Link to Deployed Application
[The Tech Blog](https://teisha-m-tech-blog.herokuapp.com/)

## User Story
As a develop who writes about tech
* I want a CMS-style blog site where I can publish articles, blog posts, and my thoughts and opinions.

## Technologies Used
* MVC Structure
* JavaScript
* Express.js
* Handlebars.js
* Node
* MySQL
* Sequelize
* bcrypt
* Heroku & JawsDB
 
## Work Completed
The project was completed using the Model, View, Controller Structure.

Using VS Code, MySQL, and Heroku, I completed the following:

* Updated API routes for Posts, Users, and Comments.
* Created Seed Data for testing the application.
* Created Handlebar views.
* Deployed the application to Heroku using JawsDB.
 
## Learnings and Issues
Some of the learnings I'm taking away from this project are:
1. I had an issue with my Models that was causing a Sequelize Database Error. My tables were not being properly created based on the Models I'd set up. Thanks to help from a TA, Sean, I realized that I was passing unecessary sequelize information in my Post and Comment models (such as timestamps and freeTableName). This was the biggest issue I faced with this assignment. If I ever run into a similar Sequelize Database Error, I'll know where to look!
2. Some of the handlebars pages were a little tricky to get right. I think I may not have fully understood the purpose of some of them and how they connected to other parts of the blog. For me, getting my posts to display correctly was a success!
3. I definitely still struggle with Authentication, which is something I look forward to learning more about in the future. I struggled to get the login/logout pages to function properly for this assignment.

## Future Application Updates
* Update Handlebars displays and get posts to display
* Fix Authentication and Login/Logout issues

 
## Contributors
Teisha McRae

![Website Screenshot](https://user-images.githubusercontent.com/73713665/122702795-27972200-d21e-11eb-84c9-6c409ce86503.png)
![Website Screenshot](https://user-images.githubusercontent.com/73713665/122609112-750f6580-d04b-11eb-83c7-86a5bca9770a.png)


