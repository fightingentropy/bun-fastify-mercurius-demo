import Fastify from "fastify";
import Mercurius from "mercurius";
import fs from "fs";
import { resolvers } from "./graphql/resolvers.js";
import routes from "./routes.js";

const fastify = Fastify();

// Read the schema file
const schema = fs.readFileSync("./graphql/schema.graphql", "utf8");

// Register routes
fastify.register(routes);

// Register Mercurius with Fastify for GraphQL
fastify.register(Mercurius, {
  schema,
  resolvers,
  graphiql: true, // Enables GraphiQL UI for testing queries, the route is /graphiql
});

// Start the Fastify server
fastify.listen({ port: process.env.PORT || 8000 }, (err, addr) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server running at http://localhost:3000`);
});
