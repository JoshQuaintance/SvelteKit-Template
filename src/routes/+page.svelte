<script lang="ts">
    import Clock from '$lib/Clock.svelte';
    import CounterButton from '$lib/CounterButton.svelte';
</script>

<svelte:head>
    <title>SvelteKit Template</title>

    <meta
        name="description"
        content="An opinionated SvelteKit template complete with Tailwind, PlayWright, Vitest, and Husky pre-installed" />
</svelte:head>

<div class="container">
    <span class="text-9xl font-bold mb-10" id="techStack">
        Hello <br />
        <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
            <span id="sveltekit" class="bg-clip-text bg-gradient-to-r text-transparent">SvelteKit</span>
        </a>

        <br />

        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            <span id="tailwind" class="bg-clip-text bg-gradient-to-r text-transparent">Tailwind</span>
        </a>!
    </span>

    <CounterButton />

    <Clock />
</div>

<style lang="postcss">
    div.container {
        @apply flex flex-col justify-around items-center;
        @apply dark:bg-gray-900 dark:text-white;
        @apply leading-loose h-screen pb-24;
    }

    #sveltekit {
        @apply cursor-pointer;
        @apply from-[#FE5858] via-[#FC9842] to-[#eb9927];
    }

    #tailwind {
        @apply cursor-pointer;
        @apply from-green-400 via-blue-500 to-indigo-500;
    }
</style>
