<script lang="ts">
    import { readable } from 'svelte/store';

    let count = 0;

    function addOneToCount() {
        count++;
    }

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });

    const time = readable(new Date(), function start(set) {
        const interval = setInterval(() => {
            set(new Date());
        }, 1000);

        return function stop() {
            clearInterval(interval);
        };
    });
</script>

<div class="flex flex-col justify-around items-center dark:bg-gray-900 dark:text-white leading-loose h-screen pb-24">
    <span class="text-9xl font-bold mb-10"
        >Hello <br />
        <a href="https://kit.svelte.dev" target="_blank"
            ><span id="sveltekit" class="bg-clip-text bg-gradient-to-r text-transparent">SvelteKit</span></a>
        <br />
        <a href="https://tailwindcss.com" target="_blank"
            ><span id="tailwind" class="bg-clip-text bg-gradient-to-r text-transparent">Tailwind</span></a
        >!</span>

    <h1 class="text-2xl">The local time is {formatter.format($time)}</h1>

    <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none"
        on:click={addOneToCount}>
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Clicked {count}
            {count > 1 ? 'times' : 'time'}
        </span>
    </button>

    <span> Click on the text to learn more about each technology </span>
</div>

<style lang="postcss">
    #sveltekit {
        @apply cursor-pointer;
        @apply from-[#FE5858] via-[#FC9842] to-[#eb9927];
    }

    #tailwind {
        @apply cursor-pointer;
        @apply from-green-400 via-blue-500 to-indigo-500;
    }
</style>
