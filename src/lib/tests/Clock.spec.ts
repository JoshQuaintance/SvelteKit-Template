import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { readable } from 'svelte/store';

const clock = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

describe('clock and store functionality', () => {
    const mock = vi.fn((_time: Date) => expect(_time).toStrictEqual(new Date()));

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('test time after 1 tick', () => {
        let time: Date;
        const unsubscribe = clock.subscribe((n) => {
            time = n;
        });

        setTimeout(() => {
            console.log('Initialized: ' + time);
            mock(time);
            unsubscribe();
        }, 1000);

        vi.runAllTimers();
    });

    test('test clock ticks every second (3 seconds)', () => {
        let time: Date;

        // subscribe to the readable store and assign the time
        const unsubscribe = clock.subscribe((n) => (time = n));
        let i = 0;

        const interval = setInterval(() => {
            console.log(`${i++} second: ${time}`);

            // run the mock
            mock(time);

            // makes sure it only runs 3 time
            if (i === 3) {
                unsubscribe();
                clearInterval(interval);
            }
        }, 1000);

        vi.runAllTimers();
    });
});
