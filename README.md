# Fastify Video API

REST API built with Fastify and PostgreSQL.

## Technologies

- Node.js
- Fastify
- PostgreSQL
- Neon
- Dotenv
- Swagger
- OpenAPI

## Features

- Create videos
- List videos
- Update videos
- Delete videos
- Swagger/OpenAPI documentation

## Project Structure

```txt
src/
├── app.js
├── server.js
│
├── database/
│   ├── database-postgres.js
│   ├── database-memory.js
│   └── db.js
│
└── routes/
    └── videos-routes.js
```

## How to Run

Install dependencies:

npm install

Run the server:

npm run dev

or

node src/server.js

## Environment Variables

Create a `.env` file in the root directory:

DATABASE_URL=your_connection_string

## API Documentation

Swagger UI available at:

```txt

http://localhost:3000/docs

```

## Endpoints

GET /videos

POST /videos

PUT /videos/:id

DELETE /videos/:id
