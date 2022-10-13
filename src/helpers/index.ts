import { IUser } from "../models/IUser";

// filter by search name
export const filterBySearch = (entries: IUser[], defferedValue: string) =>
  entries.filter(({ name }) =>
    name.toLowerCase().includes(defferedValue.toLowerCase())
  );
