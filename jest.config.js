/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
      
    // mocking assets and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/unit/mocks/file.mock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/unit/mocks/style.mock.ts',
    
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/tests/unit/mocks/file.mock.ts',
  },
   // to obtain access to the matchers.
  setupFilesAfterEnv: ['./tests/unit/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  // code coverage
  // collectCoverage: true, // always generate coverage
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
};
