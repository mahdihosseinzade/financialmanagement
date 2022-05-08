import axios from 'axios';
const baseURL = 'http://localhost:3000';

const getAllUser = async () => {
  const users = await axios.get(`${baseURL}/user`);
  return users;
};
