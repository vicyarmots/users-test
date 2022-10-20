import { createSelector } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';
import { RootState } from '../store';

const usersList = (state: RootState) => state.UserListSlice.users;
const filterType = (state: RootState) => state.UserListSlice.filterType;

// custom selectors
export const sortUsersList = createSelector(
   [usersList, filterType],
   (usersList: IUser[], filterType: string) => {
      const sortable = [...usersList];
      return (
         filterType === 'sort' &&
         sortable.sort((a, b) => (a.name > b.name ? 1 : -1))
      );
   }
);
