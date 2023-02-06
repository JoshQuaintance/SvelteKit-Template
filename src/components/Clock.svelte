<script lang="ts">
    import { time } from '$components/props/clock';

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });
</script>

<span>
    <h1 class="text-2xl">The local time is {formatter.format($time)}</h1>
</span>
