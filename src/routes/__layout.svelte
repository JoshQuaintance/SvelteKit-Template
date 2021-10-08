<slot />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
	* {
		@apply text-prussian;
		padding: 0;
		margin: 0;
	}

	:global(html) {
		background-color: #E5E5E5;
	}
</style>
