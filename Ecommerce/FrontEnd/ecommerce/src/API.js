import  axios from 'axios'

export const API = axios.create({baseURL:'http://localhost:8000'});
// export const UserSignupAPI = axios.create({baseURL:'http://localhost:8000/users/signup'});

