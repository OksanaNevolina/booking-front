import {ERole} from "../enam/role.enum";

export interface IUser {
    id: string;
    email: string;
    nameUser:string,
    name: string;
    role: ERole;
    createdAt: Date;
}
export interface IResDataUser {
    data: IUser;
}
