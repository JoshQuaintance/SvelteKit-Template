<script lang="ts">
    let count = 0;

    function addOneToCount() {
        count++;
    }
</script>

<button class="group group-hover counter" on:click={addOneToCount}>
    <span>
        Clicked {count}
        {count > 1 ? 'times' : 'time'}
    </span>
</button>

<style lang="postcss">
    button.counter {
        @apply relative inline-flex items-center justify-center overflow-hidden;
        @apply p-0.5 mb-2 mr-2 mt-5;
        @apply text-sm font-medium text-gray-900 rounded-lg;
        @apply bg-gradient-to-br from-purple-500 to-pink-500;
        @apply hover:text-white focus:ring-4 focus:ring-purple-200;
        @apply group-hover:from-purple-500 group-hover:to-pink-500;
        @apply dark:text-white dark:focus:ring-purple-800 outline-none;
    }

    span {
        @apply relative;
        @apply px-5 py-2.5;
        @apply transition-all ease-in duration-75;
        @apply bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0;
    }
</style>
