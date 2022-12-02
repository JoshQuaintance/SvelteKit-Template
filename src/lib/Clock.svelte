<script lang="ts">
    import { readable } from 'svelte/store';

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

<span>
    <h1 class="text-2xl">The local time is {formatter.format($time)}</h1>
</span>
