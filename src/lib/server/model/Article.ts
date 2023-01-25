import { Schema, model } from 'mongoose';

interface IArticle {
  title: string,
  content: string,
  author: string,
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Article = model<IArticle>('Article', articleSchema);

export default Article;