# Setting up a testing environment in a React + TypeScript application with Jest and React Testing Library

The chosen folder structure and file naming reflects a personal choice. Please, feel free to adjust this configuration to your personal taste. For any missing reference or working example, please navigate through the folders and files.

For reference, please take a look at:

-   Jest official documentation - [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)
-   React Testing Library official documentation - [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)

## Pre-requisites

-   React application writen in TypeScript

## Required Packages

To setup Jest and React Testing Library in your project, please install the following packages as project `developer dependencies`:

-   @testing-library/dom
-   @testing-library/jest-dom
-   @testing-library/react
-   @testing-library/user-event
-   @types/jest
-   cross-env
-   jest
-   jest-dom
-   jest-environment-jsdom
-   ts-jest

## Project Scripts

```bash
"scripts": {
    ...
    "test": "cross-env NODE_ENV=test jest tests/unit --watch",
    "test:coverage": "cross-env NODE_ENV=test jest tests/unit --coverage",
    ...
}
```

## Unit Tests folder structure

```
├── tests
│   └── unit
│       ├── components
│       │   └── ...
│       ├── mocks
│       │   ├── file.mock.ts
│       │   └── style.mock.ts
│       ├── pages
│       │   └── ...
│       └── jest.setup.ts
├── jest.config.ts
├── package.json
├── tsconfig.json
└── webpack.config.ts
```

## Jest project configuration `jest.config.js` file

In your project root folder, next to the project `package.json` file, a `jest.config.js` file with the following content. This configuration assumes your project has the unit tests configured in a `./tests/unit` folder.

```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        // if your using tsconfig.paths thers is no harm in telling jest
        '@components/(.*)$': '<rootDir>/src/components/$1',
        '@/(.*)$': '<rootDir>/src/$1',

        // mocking assets and styling
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/mocks/file.mock.ts',
        '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/unit/mocks/style.mock.ts',

        /* mock models and services folder */
        '(assets|models|services)': '<rootDir>/tests/unit/mocks/file.mock.ts'
    },
    // to obtain access to the matchers.
    setupFilesAfterEnv: ['./tests/unit/jest.setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    testEnvironment: 'jsdom',
    // code coverage
    // collectCoverage: true, // always generate coverage
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: 'coverage'
};
```

## Jest tests setup `jest.setup.ts` file

Create a file inside the configured folder in the file above with the following, in this case `./tests/unit/jest.setup.ts`:

```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
```

## Test the environment

Please, take a look at the example component implemented in `./src/components/Counter` folder and respective unit tests implemented in `./tests/unit/components/Counter` folder. When running the `test` script there should be no error in the terminal console.

## References used for this configuration

-   [https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2](https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2)
-   [https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest](https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest)
-   [https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0](https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0)
