import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../actions/authActions';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
        message: '',
        error: null
    },
    extraReducers: (builder) => {
        builder
        // Register
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
                state.message = 'Registration successful';
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error?.message || 'Registration failed';
                state.message = '';
                state.user = null;
            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
                state.message = 'Login successful';
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error?.message || 'Login failed';
                state.message = '';
                state.user = null;
            });
    }
});


export default authSlice.reducer;
