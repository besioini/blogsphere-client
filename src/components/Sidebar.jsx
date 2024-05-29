import './styles/Sidebar.css';

const Sidebar = () => {
    const communities = ['Community1', 'Community2'];
    return (
        <aside className='sidebar'>
            <h4>Communities</h4>
            <ul>
                {communities.map((community, index) => (
                    <li key={index}>{community}</li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar;