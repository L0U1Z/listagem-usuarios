import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typecode.com',
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});