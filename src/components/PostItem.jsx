import './styles/PostItem.css'

const PostItem = ({ post }) => {
    return (
        <>
        <div className='post-item'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br/>
            <button>Like</button>
            <button>Dislike</button>
            <button>Comment</button>
        </div>
        </>
    );
};

export default PostItem;
