import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';
export interface IRequest {
   url: string;
   method: Methods;
   options?: object;
}

export type Methods =
   | 'head'
   | 'options'
   | 'put'
   | 'post'
   | 'patch'
   | 'delete'
   | 'get';

export const request = async ({ url, method, options = {} }: IRequest) => {
   const response = await axios[method](`${API_URL}/${url}`, options);
   return response.data;
};
