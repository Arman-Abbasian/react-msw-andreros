import { AxiosPromise } from 'axios';

// TODO - Type the responses: 
// import { IGetBaseItemParams, IGetBaseListParams } from '@/models/Base';
// import { ITodo } from '@/models/Todo';
import { api } from '@/services/api';

export const getAxiosTodosApi = (params?: any): AxiosPromise<any> => {
    const { _page = 1, _limit = 9999 } = params || {};
    return api({ method: 'get', url: '/todos', params: { _page, _limit } });
};

export const getAxiosTodoApi = (params: any): AxiosPromise<any> => {
    const { id } = params;
    return api({ method: 'get', url: `/todos/${id}` });
};
