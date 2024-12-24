import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isRejected,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


import { AuthService } from '../../services';
import {IAuth, IAuthRegister, IUser} from "../../interfaces";


interface IState {
    errors: {
        username?: string[];
        detail?: string;
    };
    me: IUser;
}

const initialState: IState = {
    errors: null,
    me: null,
};

const getMe = createAsyncThunk<IUser, void>(
    'authSlice/getMe',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AuthService.getMe();
            console.log(data)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    },
);
const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({ user }, { rejectWithValue }) => {
        try {
            const  data  = await AuthService.login(user);
            console.log(data)
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    },
);
const registerInClinic = createAsyncThunk<IUser, { user: IAuthRegister }>(
    'authSlice/register',
    async ({ user }, { rejectWithValue }) => {
        try {
            const  data  = await AuthService.registerInClinic(user);
            console.log(data)
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    },
);
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addMatcher(isRejected(), (state, action) => {
                state.errors = action.payload;
            })
            .addMatcher(isFulfilled(), (state) => {
                state.errors = null;
            }),
});

const { reducer: authReducer, actions } = authSlice;

const authActions = {
    ...actions,
    login,
    registerInClinic,
    getMe,
};

export { authActions, authReducer };