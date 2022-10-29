import type { PageLoad } from ".svelte-kit/types/src/routes/$types";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const load: PageLoad = async () => {
  const allData = await prisma.comment.findMany();
  return {
    all: {
      comments: allData,
    }
  };
};