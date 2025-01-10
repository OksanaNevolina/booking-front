import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { bookingActions } from "../../redux/slices/bookingsSlice";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from './CreateBooking.module.css';

export interface FormValues {
    user: string;
    date: string;
    startTime: string;
    endTime: string;
}

const CreateBooking: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (booking) => {
        dispatch(bookingActions.createBooking({booking}));
        navigate('/bookings'); // Повернення до списку бронювань
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Створити нове бронювання</h1>

            <div className={styles.field}>
                <label htmlFor="user">Ім'я</label>
                <input
                    id="user"
                    {...register("user", { required: "Ім'я обов'язкове" })}
                    placeholder="Введіть ім'я"
                />
                {errors.user && <p className={styles.error}>{errors.user.message}</p>}
            </div>

            <div className={styles.field}>
                <label htmlFor="date">Дата</label>
                <input
                    type="date"
                    id="date"
                    {...register("date", { required: "Дата обов'язкова" })}
                />
                {errors.date && <p className={styles.error}>{errors.date.message}</p>}
            </div>

            <div className={styles.field}>
                <label htmlFor="startTime">Час початку</label>
                <input
                    type="time"
                    id="startTime"
                    {...register("startTime", { required: "Час початку обов'язковий" })}
                />
                {errors.startTime && <p className={styles.error}>{errors.startTime.message}</p>}
            </div>

            <div className={styles.field}>
                <label htmlFor="endTime">Час завершення</label>
                <input
                    type="time"
                    id="endTime"
                    {...register("endTime", { required: "Час завершення обов'язковий" })}
                />
                {errors.endTime && <p className={styles.error}>{errors.endTime.message}</p>}
            </div>

            <button className={styles.submitButton} type="submit">
                Створити
            </button>
        </form>
    );
};

export { CreateBooking };
