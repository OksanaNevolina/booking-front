import { ITokens } from './InterfaceTokens';
import { IUser } from './InterfaceUser';

export interface InterfaceResponceLogin {
    tokens: ITokens;
    user: IUser;
}