// import axios from "axios";

// const baseURL = import.meta.env.VITE_PURGATIO_BACKEND_URL;

// export const instance = axios.create({ baseURL });

// export default instance;

import axios from "axios";
export const instance = axios.create({ baseURL: "http://localhost:8080/" });

export default instance;
