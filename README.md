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

---

## Features

- Create videos
- List videos
- Update videos
- Delete videos
- Swagger/OpenAPI documentation

---

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
├── routes/
│   └── videos-routes.js
│
└── schemas/
    └── videos-schema.js
```

---

## Architecture

routes/ → defines API endpoints and request flow

schemas/ → OpenAPI documentation and request validation

database/ → persistence and data access layer

app.js → configures Fastify and plugins

server.js → starts the application

---

## Request Flow

Example:

```txt
Client Request
↓
Fastify Route (videos-routes.js)
↓
Schema Validation (videos-schema.js)
↓
Database Layer (database-postgres.js)
↓
PostgreSQL
↓
HTTP Response
```

This flow separates responsibilities and improves maintainability.

---

## Validation

The API uses Fastify schemas to:

- validate request body
- validate route parameters
- validate query parameters
- generate OpenAPI documentation automatically

Current validations include:

- minimum title length
- minimum description length
- positive duration values

---

## Current Status

Implemented features:

- CRUD for videos
- PostgreSQL integration
- Fastify route organization
- OpenAPI documentation
- Swagger UI
- request validation with schemas
- modular schema architecture
- public deployment

---

## Future Improvements

- Docker containerization
- automated tests
- authentication and authorization
- pagination and filtering
- global error handling

Roadmap items are intentionally separated from the current implementation scope.

---

## How to Run

Install dependencies:

```bash
npm install
```

Run development mode:

```bash
npm run dev
```

Run production mode:

```bash
npm start
```

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_connection_string
```

---

## API Documentation

Swagger UI available at:

```txt
http://localhost:3000/docs
```

---

## Endpoints

GET /videos

POST /videos

PUT /videos/:id

DELETE /videos/:id

---

## Live API

Application:

https://fastify-video-api.onrender.com

Swagger Documentation:

https://fastify-video-api.onrender.com/docs