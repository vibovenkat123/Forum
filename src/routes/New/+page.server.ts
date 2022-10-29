import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const author = data.get('author');
    const body = data.get('body');
    console.log(title, author, body);
  }
};