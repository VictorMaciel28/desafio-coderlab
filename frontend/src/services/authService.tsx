import axios from 'axios';

const baseURL = 'http://localhost:4000';

async function login(username: string, password: string){
  const response = await axios.post(`${baseURL}/auth/login`, { username, password });
  return response.data;
};

export default login;