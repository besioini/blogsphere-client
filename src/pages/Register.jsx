// src/pages/Register.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import './styles/login-register.css';

const Register = () => {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        dateofbirth: '',
        gender: '',
        contact: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
    const { name, value } = e.target;
        setUserData({ ...userData, [name]: value }); 
        // setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({
            firstname: userData.firstname,
            lastname: userData.lastname,
            contact: userData.contact,
            gender: userData.gender,
            dateofbirth: userData.dateofbirth,
            password: userData.password
        }));
    };

    return (
        <div className="auth-form">
        <h2>Register</h2>
        {/* Display error message if registration fails */}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstname"
                placeholder="First name"
                value={userData.firstname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={userData.lastname}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="dateofbirth"
                placeholder="Date of birth"
                value={userData.dateofbirth}
                onChange={handleChange}
                required
            />
            <select
                name='gender'
                value={userData.gender}
                onChange={handleChange}
                required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={userData.contact}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                required
            />
            <button type="submit" disabled={isLoading}>Register</button>
            <p>Already registered</p>
        </form>
        </div>
    );
};

export default Register;
