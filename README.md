# Express-SQL-Intro

A beginner-friendly introduction to building RESTful APIs with Express.js and SQL databases.

## Overview

This repository serves as a guide and starter project for developers looking to learn how to:
- Create a backend server using Express.js
- Connect to and interact with SQL databases
- Build RESTful API endpoints
- Structure a Node.js backend application

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Basic understanding of JavaScript
- Basic SQL knowledge
- PostgreSQL installed locally (or access to a PostgreSQL database)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Juan-Ceballos/Express-SQL-Intro.git
cd Express-SQL-Intro
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database configuration by creating a `.env` file with the following structure:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
PORT=3000
```

4. Initialize the database with the provided SQL schema:
```bash
npm run db:init
```

## API Endpoints

### Users

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a specific user by ID
- `POST /api/users`: Create a new user

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Error Handling

The API returns errors in the following format:
```json
{
  "error": true,
  "message": "Error description",
  "status": 400
}
```

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [node-postgres](https://node-postgres.com/)
- [dotenv](https://github.com/motdotla/dotenv)

## Contact

Juan Ceballos - [GitHub](https://github.com/Juan-Ceballos)

Project Link: [https://github.com/Juan-Ceballos/Express-SQL-Intro](https://github.com/Juan-Ceballos/Express-SQL-Intro)
