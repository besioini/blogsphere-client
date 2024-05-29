import NavBar from "../components/NavBar";
import PostList from "../components/PostList";
import PostCreate from "../components/PostCreate";
import Sidebar from '../components/Sidebar';
import './styles/Home.css'

// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div className='content'>
        <div className='sidebar left-sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <PostCreate />
          <PostList />
        </div>
        <div className='sidebar right-sidebar'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
