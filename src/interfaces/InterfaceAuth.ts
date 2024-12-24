export interface IAuth {
    email: string;
    password: string;
}
export interface IAuthRegister extends IAuth {
    name: string;

}