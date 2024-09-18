import Fastify from "fastify";
import Mercurius from "mercurius";
import fs from "fs";
import { resolvers } from "./graphql/resolvers.js";

const fastify = Fastify();

// Read the schema file
const schema = fs.readFileSync("./graphql/schema.graphql", "utf8");

// Define a simple route for the root URL
fastify.get("/", async (request, reply) => {
  return { message: "Welcome to Fastify and GraphQL with Bun!" };
});

// Register Mercurius with Fastify for GraphQL
fastify.register(Mercurius, {
  schema,
  resolvers,
  graphiql: true, // Enables GraphiQL UI for testing queries, the route is /graphiql
});

// Start the Fastify server
fastify.listen({ port: 3000 }, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at http://localhost:3000`);
});
