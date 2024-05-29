import PostItem from './PostItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import './styles/PostList.css';

const PostList = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const status = useSelector(state => state.posts.status);

    useEffect(() => {
        // console.log('Current posts:', posts);
        dispatch(fetchPosts());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading posts...</p>;
    if (status === 'error') return <p>Failed to fetch posts...</p>;
    if (!posts || posts.length === 0) return <p>No posts available.</p>;
    
    return (
        <div className='post-list'>
            {posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
        </div>
    );
};

export default PostList;

// import { useState, useEffect } from 'react';
// import PostItem from './PostItem';
// import { fetchPosts as fetchPostsAPI } from '../services/postService';
// import './styles/PostList.css';

// const PostList = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const data = await fetchPostsAPI();
//                 setPosts(data);
//             } catch (err) {
//                 console.error('Error fetching posts:', err);
//             }
//         };

//         fetchPosts();
//     }, []);

//     return (
//         <div className='post-list'>
//             {posts.map(post => (
//                 <PostItem key={post._id} post={post} />
//             ))}
//         </div>
//     );
// };

// export default PostList;
