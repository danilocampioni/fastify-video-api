# Fastify Video API

REST API built with Fastify and PostgreSQL.

## Technologies

- Node.js
- Fastify
- PostgreSQL
- Neon
- Dotenv

## Features

- Create videos
- List videos
- Update videos
- Delete videos

## Project Structure

```txt
src/
├── app.js
├── server.js
│
├── database/
│   ├── database-postgres.js
│   ├── database_memory.js
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

## Endpoints

GET /videos

POST /videos

PUT /videos/:id

DELETE /videos/:id
