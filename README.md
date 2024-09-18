# bun-fastify-mercurius-demo

This project demonstrates a GraphQL API using Bun, Fastify, Mercurius, and Prisma with SQLite.

## Setup

1. Install dependencies:

   ```
   bun install
   ```

2. Generate Prisma client:

   ```
   bun run prisma:generate
   ```

3. Run database migrations:
   ```
   bun run prisma:migrate
   ```

## Running the server

To start the server in development mode with hot reloading:

```
bun run dev
```

To start the server in production mode:

```
bun run start
```

## Why this stack?

- **Bun**: A fast all-in-one JavaScript runtime that can significantly improve startup times and overall performance.
- **Fastify**: A high-performance web framework for Node.js, known for its speed and low overhead.
- **Mercurius**: A GraphQL adapter for Fastify that provides excellent performance and easy integration.
- **Prisma**: A modern ORM that simplifies database access and management, with great TypeScript support.
- **SQLite**: A lightweight, serverless database engine perfect for development and small to medium-sized applications.

This combination offers a balance of speed, developer productivity, and scalability for building GraphQL APIs.

## Project Structure

- `index.js`: Main server file
- `graphql/schema.graphql`: GraphQL schema definition
- `graphql/resolvers.js`: GraphQL resolvers
- `prisma/schema.prisma`: Prisma schema file
- `package.json`: Project configuration and dependencies
