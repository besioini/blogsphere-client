import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../actions/postActions';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle', // // 'idle' | 'loading' | 'success' | 'error'
        message: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                // console.log('Payload received:', action.payload);
                state.status = 'success';
                state.posts = action.payload;
                state.message = 'Posts fetched successfully';
                console.log('Posts fetched successfully', state.posts);
                state.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error?.message || 'Failed to fetch posts';
                console.error('Failed to fetch posts');
                state.message = '';
            });
    }
});

export default postSlice.reducer;