import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts as fetchPostsAPI } from '../../services/postService';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (thunkAPI) => {
    try {
        const response = await fetchPostsAPI();
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})