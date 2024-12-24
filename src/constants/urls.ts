const baseURL = 'http://localhost:5400';

const register = '/auth/sign-up';
const login = '/auth/sign-in';
const logout = '/logout';
const refresh = '/refresh';
const users = '/users';

const urls = {
    auth: {
        register,
        login,
        refresh,
        logout
    },
    getUser: `${users}/me`,
};
export { baseURL, urls };