<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>
<h1>Board</h1>
<ul>
{#each data.boards as board (board.id)}
  <li><a href="/board/{board.id}">{board.name}</a></li>
{/each}
</ul>