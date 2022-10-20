// libraries
import { createAsyncThunk } from '@reduxjs/toolkit';
// services
import { getUsers } from '../../services/users.service';

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await getUsers();
            console.log(response);
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error with loading users');
        }
    }
);
