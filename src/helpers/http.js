import {default as axios} from 'axios';
// import {REACT_APP_API_URL} from '@env';

const http = (token = null) => {
    const headers = token && {
        authorization: `Bearer ${token}`,
    };
    return axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers,
    });
};

export default http;
