import React, { useEffect } from 'react';

import styles from './BookingsList.module.css';
import {bookingActions} from "../../redux/slices/bookingsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

const BookingsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { bookings, isLoading, error,itemsFound } = useAppSelector((state) => state.bookingsReducer);

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(() => {
        dispatch(bookingActions.getAllBookings({page}));
    }, [dispatch]);

    if (isLoading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Bookings</h1>
                <ul className={styles.list}>
                    {bookings.map((booking) => (
                        <li key={booking.id} className={styles.item}>
                            <div className={styles.info}>
                                <p><strong>User:</strong> {booking.user}</p>
                                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {booking.startTime} - {booking.endTime}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Pagination
                count={itemsFound}
                defaultPage={+query.get('page')}
                variant="outlined"
                color="primary"
                onChange={(event, page)=>setQuery({page: page.toString()})}
            />
        </>
    );
};

export {BookingsList};