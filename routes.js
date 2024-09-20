const routes = async (fastify) => {
  // Define a route for both root (/) and /api URLs
  fastify.get("/", handleWelcome);
  fastify.get("/api", handleWelcome);

  async function handleWelcome(request, reply) {
    return { message: "Welcome to Fastify and GraphQL with Bun!" };
  }
};

export default routes;
