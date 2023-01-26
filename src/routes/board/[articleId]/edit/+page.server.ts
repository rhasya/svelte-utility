import {error} from "@sveltejs/kit";
import Article from '$lib/server/model/Article';

import type {PageServerLoad} from "./$types";

export const load = (async ({params}) => {
  const article = await Article.findById(params.articleId).lean();
  if (!article) throw error(404, 'Not found');
  return { article: {
      author: article.author,
      title: article.title,
      content: article.content,
    },
  };
}) satisfies PageServerLoad;