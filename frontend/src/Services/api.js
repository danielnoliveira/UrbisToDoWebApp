import axios from "axios";
import { getToken } from "./tokenManager";

const api = axios.create({
    baseURL: "http://127.0.0.1:3000"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers['x-jw-token'] = token;
    }
    return config;
});

export default api;