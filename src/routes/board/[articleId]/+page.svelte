<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data: PageServerData
  const { title, content, author, _id } = data.article;

  function handleClick() {

  }
</script>
<div>
  <h3 style="margin-bottom: 0;">{title}</h3>
</div>
<div>
  <h5 style="margin-bottom: 0;;">{author}</h5>
</div>
<div>
  {@html content}
</div>
<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
  <div>
    <a href="/board">목록</a>
  </div>
  <div style="display: flex; flex-direction: row; justify-content: flex-end; gap: 8px;">
    <a href="/board/{_id}/edit" role="button">수정</a>
    <a href={'#'} on:click={handleClick} style="background-color: red;" role="button">삭제</a>
  </div>
</div>