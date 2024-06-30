import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// Start worker
// In order for our mock definition to execute during the runtime, it needs to be imported into our application's code. 
// However, since mocking is a development-oriented technique, we will be importing our `src/mocks/browser.js` file 
// conditionally, depending on the current environment.
if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
