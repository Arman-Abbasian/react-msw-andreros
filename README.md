# react-msw-example-app

React application example of how to implement Mock Service Worker to mock a REST API.

The Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests. It can seamlessly mock REST / GraphQL request in a browser or Node.js:

-   Intercepts requests on the network level, not the application level.
-   If your think of your application as a box, Mock Service Worker lives in its own box next to yours, instead of opening and altering it for the purpose of mocking.
-   Agnostic of request-issuing libraries, so you can use it with `fetch`, `axios`, `react-query`, you-name-it.
-   The same mock definition can be reused for unit, integration, E2E testing, and debugging.

If you are trying to install this library in your own project, be sure to follow the [install tutorial](https://mswjs.io/docs/getting-started/install) on MSW official documentation page.

The code in this application is meant to work as a reference and a cluster of working examples on how to use this technology.

## References

-   MSW NPM Package page: [https://www.npmjs.com/package/msw](https://www.npmjs.com/package/msw)
-   MSW Official page and documentation: [https://mswjs.io/docs](https://mswjs.io/docs)
-   MSW Getting started tutorial: [https://mswjs.io/docs/getting-started/install](https://mswjs.io/docs/getting-started/install)
-   Mocking Requests with Mock Service Worker article: [https://nate-d-gage.medium.com/mocking-axios-with-mock-service-worker-427b0f87aa08](https://nate-d-gage.medium.com/mocking-axios-with-mock-service-worker-427b0f87aa08)
-   JSON Placeholder API: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `Mock Service Worker` to mock API calls;
-   `SASS` style pre-processor to build the needed application styles;
-   `Axios` to communicate with the backend API;
-   `DotEnv` to load project environment variables;
-   `PicniCSS` lightweight CSS framework for UI styling;

## Application Support tools

-   `Prettier` for code formatting;
-   `Webpack` to bundle the application and serve it in development mode;
-   `Log4Brains` to manage Architectural Decision Record (ADR) and generate static HTML knowledge base;
-   `Statoscope` to generate reports about the application;

## Application Testing tools

-   `Jest` javascript testing framework;
-   `React Testing Library` testing framework for working with React components;

## Installation and application bootstrap

From the project root folder, please execute the following commands in a terminal window:

```
npm i
npm start
```

## Application usage

Follow the application onscreen indications. Use your browser `developer tools`, in particular the `console` and `network` to track the application results.

## Where to go from here (read it "further improvements")

-   Type `Axios` API object / models responses correctly;
-   Add `react-query` usage example;
-   Add unit test examples with `jest`;
-   Add `storybook` usage example;
# react-msw-andreros
