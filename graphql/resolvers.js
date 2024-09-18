import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
  },
  Mutation: {
    createUser: (_, { email, name }) =>
      prisma.user.create({ data: { email, name } }),
  },
};
