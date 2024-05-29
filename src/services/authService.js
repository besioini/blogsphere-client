import axios from 'axios';

// const URL = process.env.BASE_URL;

const URL = 'http://localhost:5000/api/users'

export const login = async (contact, password) => {
  const response = await axios.post(
    `${URL}/login`, 
    { contact, password }, 
    { withCredentials: true }
  );
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(
    `${URL}/register`, 
    userData, 
    { withCredentials: true }
  );
  return response.data;
};

