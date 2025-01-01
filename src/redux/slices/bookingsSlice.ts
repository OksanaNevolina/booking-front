import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {IBookingResponse, IPaginationResponse} from "../../interfaces/InterfaceBookings";
import {AxiosError} from "axios";
import {BookingService} from "../../services/BookingService";


interface BookingsState {
    bookings: IBookingResponse[];
    itemsFound:number;
    page: number;
    isLoading: boolean;
    error: string | null;
}

const initialState: BookingsState = {
    bookings: [],
    itemsFound:0,
    page: 0,
    isLoading: false,
    error: null,
};

const getAllBookings = createAsyncThunk<IPaginationResponse<IBookingResponse>, { page: string }>(
    'moviesSlice/getMoviesList',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await BookingService.getAll(page.page);
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const bookingsSlice = createSlice({
    name: 'bookingsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBookings.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllBookings.fulfilled, (state, action) => {
                const {data,itemsFound,page}= action.payload
                state.isLoading = false;
                state.bookings = data;
                state.itemsFound = itemsFound
                state.page = page;
            })
            .addCase(getAllBookings.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch bookings';
            });
    },
});
const {reducer: bookingsReducer,actions}=bookingsSlice;
const bookingActions = {
    ...actions,
    getAllBookings,
}
export  {bookingsReducer, bookingActions};
