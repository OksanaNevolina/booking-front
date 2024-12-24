import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from "./slices";
import {themeReducer} from "./slices/themeSlice";


const store = configureStore({
    reducer: {
        authReducer,
        themeReducer,
    },
});
export { store };