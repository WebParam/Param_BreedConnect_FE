import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://breed-connect-be-dev.azurewebsites.net',
});

export default instance;