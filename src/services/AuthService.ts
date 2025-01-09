
import {IApiResponse, IAuth, IAuthRegister, IResDataUser, ITokens, IUser} from '../interfaces';
import { IRes } from '../types';
import { ApiService } from './ApiService';
import {urls} from "../constants/urls";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';
const AuthService = {

    async login(user: IAuth): Promise<IResDataUser> {
        try {

            const { data: { data: res } } = await ApiService.post<IApiResponse<ITokens>>(
                urls.auth.login,
                user,
            );
            

            this.setTokens({
                access: res.accessToken,
                refresh: res.refreshToken,
            });

            const { data: me } = await this.getMe();
            return me;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },



    async registerInClinic(user: IAuthRegister): Promise<IUser> {
        try {

            const { data } = await ApiService.post<Promise<IUser>>(
                urls.auth.register,
                user,
            );
            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },



    async refresh(): Promise<void> {
        const refresh = this.getRefreshToken();
        const { data } = await ApiService.post<ITokens>(urls.auth.refresh, {
            refresh,
        });
        this.setTokens({
            access: data.accessToken,
            refresh: data.refreshToken,
        });
    },

    getMe(): IRes<IResDataUser> {
        return ApiService.get(urls.getUser);
    },
    // async logoutMe(): Promise<void> {
    //     await ApiService.delete(urls.auth.logout);
    //     this.deleteTokens();
    // },

    setTokens({ access, refresh }: { access: string; refresh: string }): void {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey);
    },
    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey);
    },
    // deleteTokens(): void {
    //     localStorage.removeItem(accessTokenKey);
    //     localStorage.removeItem(refreshTokenKey);
    // },
};

export { AuthService };