import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, login } from '../../services/authService';

export const registerUser = createAsyncThunk('auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const loginUser = createAsyncThunk('auth/login',
  async ({ contact, password }, thunkAPI) => {
    try {
      const response = await login(contact, password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// import { createAction } from '@reduxjs/toolkit';
// export const loginUser = createAction('auth/login', async (email, password, thunkAPI) => {
//   try {
//     const data = await authService.login(email, password);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

// export const registerUser = createAction('auth/register', async (user, thunkAPI) => {
//   try {
//     const data = await authService.register(user);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });