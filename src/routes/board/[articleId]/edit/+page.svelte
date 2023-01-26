<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const { article } = data;
</script>

<h3>Edit</h3>
<form method="POST">
	<div>
		<label for="author">Author</label>
		<input type="text" id="author" name="author" value={article.author} required />
	</div>
	<div>
		<label for="title">Title</label>
		<input type="text" id="title" name="title" value={article.title} required />
	</div>
	<div>
		<label for="content">Content</label>
		<textarea id="content" name="content" required>{article.content}</textarea>
	</div>
	<div>
		<button type="submit">Save</button>
	</div>
</form>
