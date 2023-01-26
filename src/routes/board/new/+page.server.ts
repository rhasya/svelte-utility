import { Article, type IArticle } from '$lib/server/model/Article';
import { redirect } from '@sveltejs/kit';
import type { HydratedDocument } from 'mongoose';
import type { Actions } from '../$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formdata = await request.formData();
		const author = formdata.get('author')?.toString() ?? '';
		const title = formdata.get('title')?.toString() ?? '';
		const content = formdata.get('content')?.toString() ?? '';

		// save data to db
		const article: HydratedDocument<IArticle> = new Article({
			author,
			title,
			content
		});
		await article.save();

		throw redirect(303, '/board');
	}
};
