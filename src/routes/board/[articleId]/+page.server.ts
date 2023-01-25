import { Article } from '$lib/server/db';
import type { PageServerLoad, PageServerLoadEvent } from './$types';

export const load = (async ({ params }) => {
  const article = await Article.findById(params.articleId).lean();
  return { article: JSON.parse(JSON.stringify(article))};
}) satisfies PageServerLoad;