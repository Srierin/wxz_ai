import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5174/api';


axios.interceptors.request.use((config) => {
  const token=localStorage.getItem('token') ||"";
  // console.log('//////')
  // let token = localStorage.getItem('token') || "";
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})
axios.interceptors.response.use((res) => {
  console.log('|||||')
  return res
})
export default axios;