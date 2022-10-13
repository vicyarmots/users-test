import { IUser } from "../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../store/FetchUsersList";
import { v4 as uuidv4 } from "uuid";
// types & interfaces
import { UserState } from "../models/IUser";

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<IUser>) => {
        state.users.push(action.payload);
      },
      prepare: (name, phone, email) => ({
        payload: {
          id: Math.random(),
          name,
          email,
          phone,
        } as IUser,
      }),
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(({ id }) => id !== action.payload);
    },
    sortUsersList(state) {
      state.users = state.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addUser, removeUser, sortUsersList } = userSlice.actions;

export default userSlice.reducer;
