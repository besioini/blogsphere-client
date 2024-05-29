import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './styles/login-register.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ 
      contact: '', 
      password: '' 
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await dispatch(loginUser(credentials)).unwrap() 
        // Use unwrap() to handle the returned Promise
        navigate('/home');
      } catch (error) {
        console.error('Failed to login:', error);
        prompt('Login Error!'); 
      }
      
    };

    return (
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={credentials.contact}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
};

export default Login;
