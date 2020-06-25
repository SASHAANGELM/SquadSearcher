import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:3000/';
export const WG_APP_ID = '585ec68d1028ab7ad5c6d2e5dabd8a11';

axios.defaults.baseURL = API_URL;
