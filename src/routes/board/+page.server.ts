import { Article } from '$lib/server/model';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const articles = await Article.find({}).lean();
  // console.log(JSON.parse(JSON.stringify(articles)));
  return { articles: JSON.parse(JSON.stringify(articles)) };
}) satisfies PageServerLoad;