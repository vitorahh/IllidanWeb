import axios from 'axios';

const api = axios.create({
    baseURL:'https://illidanapp.herokuapp.com/'
});

export default api;


