export interface ITokens {
    accessToken: string;
    refreshToken: string;
    accessExpiresIn: string;
    refreshExpiresIn: string;
}
 export interface IApiResponse<T> {
    data: T;
}