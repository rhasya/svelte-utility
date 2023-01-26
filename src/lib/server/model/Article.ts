import { Schema, model, models } from 'mongoose';

interface IArticle {
	title: string;
	content: string;
	author: string;
}

const articleSchema = new Schema<IArticle>({
	title: { type: String, required: true },
	content: { type: String, required: true },
	author: { type: String, required: true }
});

model<IArticle>('Article', articleSchema);
export default models.Article;
