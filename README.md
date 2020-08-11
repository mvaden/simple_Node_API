# Basic REST API

This repo contains is a simple example for developing a RESTful API. It is meant to serve as a basic demonstration for how to design a simple backend application that performs CRUD operations a database that can rapidly be up and running with few dependencies.

## The core stack:
- [Node.js](https://nodejs.org/en/) - the runtime environment for the application
- [Express.js](https://expressjs.com) - the minimal framework used to make this application RESTful
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - NoSQL database in the cloud
- [Mongoose.js](https://mongoosejs.com) - schema-based solution for Object Data Modeling with MongoDB

## Other dependencies and extensions:
- [Nodemon](https://nodemon.io) - automatically restarts the Node application whenever file changes in the directory are detected
- [REST Client](https://github.com/Huachao/vscode-restclient) - an alternative to Postman, VS Code extension for testing REST endpoints

## To Run:

Clone this repo onto your local development environment. Once inside the project directory, you can start the server by running `nodemon server.js` from the CLI. This will serve up the application but NOT the database. 

The database in this application is being served from a collection within an instance of Mongo DB Atlas, remotely. To utilized all REST functionality, you will need to have MongoDB (Community) installed on your local environment, or have a collection in MongoDB Atlas to connect to.
