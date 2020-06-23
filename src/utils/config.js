import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:3000/';

axios.defaults.baseURL = API_URL;
