<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
	$: role = form?.role ?? 'USER';
</script>

<h3>New User</h3>
{#if form?.error}
	<article>{form?.message}</article>
{/if}
<form method="POST">
	<input
		type="username"
		placeholder="Username"
		id="username"
		name="username"
		required
		value={form?.username ?? ''}
	/>
	<input type="password" placeholder="Password" id="password" name="password" required value={''} />
	<select name="role" bind:value={role}>
		<option>ADMIN</option>
		<option>USER</option>
	</select>
	<button>Save</button>
</form>
<div class="btn-container">
	<a href="/user">목록으로</a>
</div>
