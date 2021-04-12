import axios from "axios";
import { getToken } from "./tokenManager";

const api = axios.create({
    baseURL: "https://tranquil-mesa-96633.herokuapp.com"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers['x-jw-token'] = token;
    }
    return config;
});

export default api;