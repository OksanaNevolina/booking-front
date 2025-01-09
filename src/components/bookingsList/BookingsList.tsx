import React, { useEffect } from 'react';

import styles from './BookingsList.module.css';
import {bookingActions} from "../../redux/slices/bookingsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useLocation, useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import {authActions} from "../../redux";

const BookingsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { bookings, isLoading, error,itemsFound } = useAppSelector((state) => state.bookingsReducer);
    const { me: reduxMe} = useAppSelector(state => state.authReducer);

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    const location = useLocation();
    const stateMe = location.state?.me;

    useEffect(() => {
        if (!stateMe) {
            dispatch(authActions.getMe());
        }
    }, [dispatch, stateMe]);
    console.log(reduxMe,stateMe.data)


    const me = stateMe.data || reduxMe;


    useEffect(() => {
        dispatch(bookingActions.getAllBookings({page}));
    }, [dispatch,page]);


    if (isLoading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <>
            <div className={styles.userInfo}>
                {me ? (
                    <p>
                        <span className={styles.name}>  Привіт , {me.name || me.nameUser} ! </span>
                    </p>
                ) : (
                    <p className={styles.loading}>Ім'я користувача завантажується...</p>
                )}
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Бронювання</h1>
                <ul className={styles.list}>
                    {bookings.map((booking) => (
                        <li key={booking.id} className={styles.item}>
                            <div className={styles.info}>
                                <p><strong>Для кого бронь: </strong> {booking.user}</p>
                                <p><strong>Дата: </strong> {new Date(booking.date).toLocaleDateString()}</p>
                                <p><strong>Час: </strong> {booking.startTime} - {booking.endTime}</p>
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
                onChange={(event, page) => setQuery({page: page.toString()})}
            />
        </>
    );
};

export {BookingsList};