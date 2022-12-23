import { test, expect } from '@playwright/experimental-ct-svelte';
import CounterButton from '$lib/components/CounterButton.svelte';

test('test CounterButton.svelte', async ({ mount }) => {
    const component = await mount(CounterButton);

    await expect(component).toContainText('0');

    await component.dblclick();

    await expect(component).toContainText('2');

    await component.click();
    await component.dblclick();

    await expect(component).toContainText('5');
});
