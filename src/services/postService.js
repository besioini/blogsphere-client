import axios from 'axios';

const baseURL = 'http://localhost:5000/api/posts/';

export const fetchPosts = async() => {
    try {
        const response = await axios.get(
            baseURL,
            { withCredentials: true }
        );
        return response.data;
    } catch (err) {
        console.error('Error fetching posts:', err.message)
        throw err;
    }
};