import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from "./slices";
import {themeReducer} from "./slices/themeSlice";
import {bookingsReducer} from "./slices/bookingsSlice";


const store = configureStore({
    reducer: {
        authReducer,
        themeReducer,
        bookingsReducer
    },
});
export { store };