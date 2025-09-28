# Full-Stack To-Do List Application
This project is a simple, yet fully functional, To-Do list application built to demonstrate the integration of a Node.js backend, an Express server, and a persistent PostgreSQL database.

It serves as a fundamental template for building more complex, data-driven full-stack applications.

The site is currently deployed on Render at: https://todo-full-stack-jggn.onrender.com/

## Features
Create: Users can add new to-do items to the list.

Read: Displays all current to-do items fetched from the SQLite database in real-time.

Delete: Users can remove items from the list, which updates the database.

Full Persistence: All to-do items are stored in a relational database, meaning data persists across server restarts.

## Technologies
This application utilizes a standard full-stack architecture (often referred to as the MERN or MEAN stack, but customized here with Express/SQLite).

Component

Technology

Description

Frontend

HTML5, CSS3, Vanilla JavaScript

Simple, clean interface for user interaction.

Backend

Node.js

JavaScript runtime environment.

Server Framework

Express.js

Minimalist framework for handling API routes (/todos).

Database

SQLite

Powerful open-source relational database for data persistence.

DB Driver

pg (Node-PostgreSQL)

Library used by the server to connect and query the database.

## Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites
You must have the following software installed on your system:

Node.js & npm: (Use npm -v to check)

SQLite: The database server must be running and accessible.

1. Seed the DataBase

Run in terminal:

npm run knex migrate:latest
npm run knex seed:run

2. Project Installation
Clone the repository:

git clone [https://github.com/abe-calder/TODO-fullstack-database.git](https://github.com/abe-calder/TODO-fullstack-database.git)
cd TODO-fullstack-database

Install Node dependencies:

npm install

3. Running the Server
Start the application using Node.

node server.js

The server will typically run on http://localhost:3000. Open this address in your web browser to view the To-Do list interface and start interacting with your database!
