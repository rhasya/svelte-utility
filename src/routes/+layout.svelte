<script lang="ts">
	import '@picocss/pico/css/pico.min.css';
	import '../app.css';
</script>

<div class="app">
	<div class="container">
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/board">Board</a></li>
				<li><a href="/user">User</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</div>
	<main class="container ">
		<slot />
	</main>
</div>
