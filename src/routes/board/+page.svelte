<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>
<h1>Board</h1>
<ul>
{#each data.articles as article (article._id)}
  <li><a href="/board/{article._id}">{article.title}</a></li>
{/each}
</ul>
<a href="board/new" role="button">New</a>