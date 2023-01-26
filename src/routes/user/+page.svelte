<script lang="ts">
	import type { PageServerData } from './$types';
  export let data: PageServerData;
</script>

<svelte:head>
	<title>User</title>
</svelte:head>
<h3>User</h3>
<table>
	<thead>
		<tr>
			<th>Username</th>
			<th>Role</th>
		</tr>
	</thead>
	<tbody>
    {#each data.users as user(user._id)}
    <tr>
      <td>{user.username}</td>
      <td>{user.role}</td>
    </tr>
    {/each}
  </tbody>
</table>
<div class="btn-container">
	<a href="/user/new" role="button">New</a>
</div>
