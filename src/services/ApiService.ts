import axios, { AxiosError } from 'axios';



import { AuthService } from './AuthService';
import {baseURL} from "../constants/urls";

const ApiService = axios.create({ baseURL });

ApiService.interceptors.request.use((request) => {
    const tokenAccess = AuthService.getAccessToken();
    if (tokenAccess) {
        request.headers.authorization = `Bearer ${tokenAccess}`;
    }
    return request;
});


export { ApiService };