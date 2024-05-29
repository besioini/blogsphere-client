import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/home' className='navbar-brand'>Blogsphere</Link>
      <div>
        <Link to=''>Logout</Link>
        <Link></Link>
      </div>
    </nav>
  );
};

export default NavBar;