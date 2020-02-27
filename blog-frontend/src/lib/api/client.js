import axios from 'axios';

const client = axios.create();

/*
    client.defaults.baseURL = 'https://external-api-server.com/'

    client.default.headers.common['Authorization'] = 'Baarer a1b2c3'

    axios.intercepter.response.use(
        response => {
            return response;
        },
        error => {
            return Promise.reject(error);
        }
    )
*/

export default client;
