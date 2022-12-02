import { expect, test } from '@playwright/test';

test('test tech stack links', async ({ page }) => {
    // load landing page
    await page.goto('/');

    // get the span with tech stack
    const techStack = page.locator('#techStack');

    // make sure it has the greet
    await expect(techStack).toContainText(/(Hello)\s+(SvelteKit)\s+(Tailwind)/);

    /* SvelteKit */
    const [sveltekit] = await Promise.all([
        // It is important to call waitForEvent first.
        page.waitForEvent('popup'),

        // click on the link
        techStack.locator('#sveltekit').click()
    ]);

    // wait for sveltekit page to load
    await sveltekit.waitForEvent('domcontentloaded');

    // makes sure the page is sveltekit
    await expect(sveltekit).toHaveTitle(/SvelteKit/i);

    await sveltekit.close();

    /* Tailwind */
    const [tailwind] = await Promise.all([page.waitForEvent('popup'), techStack.locator('#tailwind').click()]);

    // wait for tailwind page to load
    await tailwind.waitForEvent('domcontentloaded');

    // make sure the page is tailwind
    await expect(tailwind).toHaveTitle(/tailwind/i);

    await tailwind.close();
});

test('test counter button clicks', async ({ page }) => {
    await page.goto('/');

    const btn = page.locator('button');

    // checks if it starts with 0
    await expect(btn).toContainText('0');

    await btn.dblclick();

    await expect(btn).toContainText('2');

    await btn.click();
    await btn.dblclick();

    await expect(btn).toContainText('5');
});
