import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:9001',
    baseURL: 'https://breed-be.vercel.app',
});

export default instance;