import { getEnvironmentVariables } from '@/tools/tools';

export const getFetchTodosApi = (params?: any): Promise<Response> => {
    const { _page = 1, _limit = 9999 } = params || {};
    const urlParams = new URLSearchParams({ _page, _limit })
    return fetch(`${getEnvironmentVariables('apiBaseUrl')}/todos?${urlParams}`, { method: 'GET' });
};

export const getFetchTodoApi = (params: any): Promise<Response> => {
    const { id } = params;
    return fetch(`${getEnvironmentVariables('apiBaseUrl')}/todo/${id}`, { method: 'GET' });
};
