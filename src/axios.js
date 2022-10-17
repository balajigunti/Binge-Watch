// axioas is a library to make requests to a server
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;