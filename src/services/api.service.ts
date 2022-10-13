import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export interface IRequest {
  url: string;
  method: Methods;
  data?: object;
}

export type Methods =
  | "head"
  | "options"
  | "put"
  | "post"
  | "patch"
  | "delete"
  | "get";

export const request = async ({ url, method, data = {} }: IRequest) => {
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
