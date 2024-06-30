import { getEnvironmentVariables } from '@/tools/tools';

const axios = require('axios').default;

export const api = axios.create({
    baseURL: getEnvironmentVariables('apiBaseUrl')
});
