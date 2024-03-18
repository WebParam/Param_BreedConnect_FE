import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:7061',
});

export default instance;