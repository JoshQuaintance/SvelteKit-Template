import { test, expect } from '@playwright/experimental-ct-svelte';
import Clock from '$lib/components/Clock.svelte';

const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
});

test('test Clock.svelte', async ({ mount }) => {
    const component = await mount(Clock);

    // Initial time should be the system's time
    await expect(component).toContainText(formatter.format(new Date()));

    // hard wait 1000ms
    await component.waitFor({ timeout: 1000 });

    await expect(component).toContainText(formatter.format(new Date()));
});
