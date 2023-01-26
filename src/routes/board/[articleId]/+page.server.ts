import Article from '$lib/server/model/Article';
import type { PageServerLoad, Actions } from './$types';
import {redirect} from "@sveltejs/kit";

export const load = (async ({ params }) => {
  const article = await Article.findById(params.articleId).lean();
  return { article: JSON.parse(JSON.stringify(article))};
}) satisfies PageServerLoad;

export const actions = {
  default: ({params}) => {
    // update
    console.log('aa');
    // throw redirect(303, `/board/${params.articleId}`);
    return {};
  }
} satisfies Actions;