/**
 * Function responsible for retrieving an environment variable declared in the .env file.
 * @param envVariable {string} The environment variable key.
 * @return {string | undefined} The environment variable, if the variable key exists. `undefined` otherwise.
 */
export const getEnvironmentVariables = (envVariable: string): string | undefined => {
    return process.env[envVariable];
};
