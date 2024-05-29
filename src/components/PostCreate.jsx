import { useState } from 'react';
import './styles/PostCreate.css';

const PostCreate = () => {

    // const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {};
    const handleChange = () => {};

    return (
        <div className='post-create'>
            <form onSubmit={handleSubmit}> 
            <textarea
                type="text"
                placeholder="what's on your mind, {userName}?"
                value={body}
                onChange={handleChange}
            />
            {/* <button type='submit'>Post</button> */}
            </form>
        </div>
    )
}

export default PostCreate
