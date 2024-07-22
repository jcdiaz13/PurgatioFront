import axios from 'axios';

const baseURL = import.meta.env.VITE_PURGATIO_BACKEND_URL

export const instance = axios.create({ baseURL });

export default instance

