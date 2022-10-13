import { request } from "./api.service";

export const getUsers = () => request({ url: `users`, method: "get" });
