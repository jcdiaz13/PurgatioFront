import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://purgatio-e1997b11ce6e.herokuapp.com",
// });

// export default instance;

export const instance = axios.create({ baseURL: "http://localhost:8080/" });

export default instance;
