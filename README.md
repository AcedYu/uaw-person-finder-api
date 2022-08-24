# uaw-person-finder-api
I was tasked to build and deploy a very simple application that can retrieve records in a sample database
by last name. I configured a working Express.js API to use Sequelize to interact with a MySQL database.

It contains notable features such as:
- protection of important login information using .env
- Connection to a mySQL database using Sequelize
- schema and seed commands that create and seed the database with test data
- Working GET route based on employee last name to be able to view data in the mySQL server.

## Current Working Routes
/api/employee/INSERT_LAST_NAME_HERE

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js is required.

### Installing
To install the necessary dependencies, run the npm installation command
```
npm install
```
Before launching the program you should also run the data seeding command
```
npm run seed
```

### Testing
There are no tests in this application, however there is the ability to run a development server with the watch command
```
npm run watch
```

### Usage
You can run the program on the command line with the following command:
```
npm start
```

## Deployed Link

* [See Live Site](https://uaw-employee-database.herokuapp.com/)

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [Express](https://expressjs.com/)
* [mySQL](https://dev.mysql.com/doc/)
* [Sequelize](https://sequelize.org/master/)

## Authors
AcedYu
- [Link to Github](https://github.com/AcedYu)
- [Link to LinkedIn](https://www.linkedin.com/in/alex-yu-3712811b9/)