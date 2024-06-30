import { setupWorker } from 'msw';

import { handlers } from './handlers';

// Setup browser service worker using the given handlers
export const worker = setupWorker(...handlers);

export const startMockServiceWorker = () => {
    worker.start();
}

export const stopMockServiceWorker = () => {
    worker.stop();
}
