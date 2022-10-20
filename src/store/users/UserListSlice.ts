// libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// actions
import { fetchUsers } from './FetchUsersList';
// models
import { UserState } from '../../models/IUser';
import { IUser } from '../../models/IUser';

const initialState: UserState = {
   users: [],
   filterType: '',
   isLoading: false,
   error: '',
};

export const userListSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addUser: {
         reducer: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload);
         },
         prepare: (name, phone, email) => ({
            payload: {
               id: uuidv4(),
               name,
               email,
               phone,
            } as IUser,
         }),
      },
      removeUser(state, action: PayloadAction<IUser['id']>) {
         state.users = state.users.filter(({ id }) => id !== action.payload);
      },
      setFilterType(state, action: PayloadAction<string>) {
         state.filterType = action.payload;
      },
   },
   extraReducers: {
      [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
         state.isLoading = false;
         state.error = '';
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

export const { addUser, removeUser, setFilterType } = userListSlice.actions;

export default userListSlice.reducer;
