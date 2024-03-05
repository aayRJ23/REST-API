# RESTful API with Node.js, Express, and MongoDB

## Introduction

This repository contains the source code for a simple RESTful API built with Node.js, Express, and MongoDB. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on posts.

## Endpoints

- `POST /api/post`: Create a new post.
- `GET /api/getAll`: Retrieve all existing posts.
- `GET /api/getOne/:id`: Retrieve a specific post by ID.
- `PATCH /api/update/:id`: Update an existing post by ID.
- `DELETE /api/delete/:id`: Delete a post by ID.

Each **Post** object includes the following attributes:
- `title`: Title of the post.
- `content`: Content of the post.
- `author`: Author of the post.
- `date`: Date the post was created.

## Installation

1. **Clone the repository:**
   - git clone **https://github.com/aayRJ23/RESTful-API.git**
   - cd server
2. **Install dependencies:**
   - npm install
3. **Set up your MongoDB connection URI:**
   - Create a .env file in the root directory of your project.
   - Add the following line to the .env file, replacing <your-mongodb-uri> with your actual MongoDB connection URI:
   - **MONGO_URL**=<your-mongodb-uri>
4. **Start the server:**
   - npm start
   - The server should now be running on **http://localhost:4000.**

## Directory Structure

- **server/**
  - **models/**
    - `post.js`: Contains the Mongoose schema for the `Post` model.
  - **routes/**
    - `routes.js`: Defines routes for handling HTTP requests.
  - `server.js`: Initializes the Express application and sets up routes and middleware.
  - `...`: Other files and directories within the `server` directory.
 
## Technological Stack and Usage

- **Node.js**: Node.js is used as the server-side JavaScript runtime environment. It allows running JavaScript code outside of a web browser, making it suitable for building server-side applications, including APIs.
- **Express.js**: Express.js is a web application framework for Node.js that provides a set of features for building web and mobile applications. It simplifies the process of defining routes, handling requests and responses, and implementing middleware.
- **MongoDB**: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is used as the database for storing and managing the application's data, including posts and user information.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward schema-based solution for modeling application data and interacting with MongoDB databases using JavaScript objects.


