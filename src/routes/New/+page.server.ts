import type { Actions } from "@sveltejs/kit";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = String(data.get('title'));
    const author = String(data.get('author'));
    const body = String(data.get('body'));
    await prisma.comment.create({
      data: {
        author,
        title,
        body
      }
    });
    prisma.$disconnect;
  }
};