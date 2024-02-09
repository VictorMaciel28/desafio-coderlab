import axios from 'axios';

const apiURL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

async function login(username: string, password: string){
  
  const response = await axios.post(`${apiURL}/auth/login`, { username, password });
  return response.data;
};

export default login;