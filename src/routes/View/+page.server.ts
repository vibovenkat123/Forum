import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const load = async () => {
  const allData = await prisma.comment.findMany();
  return {
    all: {
      comments: allData,
    }
  };
};