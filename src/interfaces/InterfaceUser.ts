import {ERole} from "../enam/role.enum";

export interface IUser {
    name: string;
    email: string;
}
export interface IUserResponceRegister extends Document {
    email: string;
    password: string;
    name: string;
    role: ERole;
    createdAt: Date;
}