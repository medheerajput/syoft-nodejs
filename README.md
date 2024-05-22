<!-- 
using env variables
JWT_SECRET = ""
MONGODB_URL = ""
PORT = "" 
-->

Welcome to Our Node.js API Project!
What's This Project About?
This project is all about creating a powerful backend for your web application. It provides a set of API endpoints that allow users to register, log in, and manage products.

Getting Started//
To get started with the project, followed these simple steps:

Clone the Repository: We can clone this repository to our local machine using Git.

Install Dependencies: Once we've cloned the repository, navigate to the project directory.

Set Up Environment Variables: Created a .env file in the root directory of the project and added environment variables. These include the port number, MongoDB URI, and JWT secret key.

Started the Server: Finally, started the server by running npm start in our terminal. Our server should now be up and running!

API Endpoints
Our API provides the following endpoints:

User Authentication: Register a new user or log in with an existing account.
Product Management: Create, read, update, and delete products.

/auth/register: Register a new user.
/auth/login: Log in with an existing account.
/products: Create, read, update, and delete products.

Middlewares -
We've implemented some middleware functions to handle authentication and authorization:

authenticateToken: This middleware verifies the JWT token sent with each request to authenticate users.

checkRole: This middleware checks the role of the user to determine if they have the necessary permissions for certain actions.

Project Structure -
Our project is organized into different directories:

Routes: Contains route handlers for different API endpoints.

Middleware: Contains middleware functions for authentication and authorization.

Models: Contains Mongoose models for our MongoDB database.

Utils: Contains utility functions for bcrypt hashing, JWT token generation, error handling, and success responses.

Dependencies -
We've used a variety of dependencies to build this project, 
including Express.js for our web framework, 
Mongoose for MongoDB integration, 
bcryptjs for password hashing, 
jsonwebtoken for JWT authentication, 
and dotenv for managing environment variables.


note - while using postman, when you will pass token so use Bearer token.

Dheeraj Patil
thank you!
