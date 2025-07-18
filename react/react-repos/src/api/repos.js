import axios from 'axios';// http请求库
// 这是在做http 请求的时候 所有接口地址的公共部分
const BASE_URL = 'https://api.github.com/';// 基础地址
// 标准http请求库
// axios method url
// 返回的是promise对象 很现代
// api 模块 
export const getRepos = (username) => {
   
    return axios.get(`${BASE_URL}users/${username}/repos`);
}
export const getRepoDetail = async (username, reponame) => {
    return await axios.get(`${BASE_URL}repos/${username}/${reponame}`);
}
