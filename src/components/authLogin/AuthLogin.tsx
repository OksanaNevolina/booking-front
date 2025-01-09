import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {IAuth} from '../../interfaces';
import { authActions } from '../../redux';
import css from './AuthLogin.module.css';

const AuthLogin = () => {
    const { register, reset, handleSubmit } = useForm<IAuth>();

    const { errors } = useAppSelector((state) => state.authReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login: SubmitHandler<IAuth> = async (user)=> {

        const {
            meta: { requestStatus },
            payload
        } = await dispatch(authActions.login({ user }));

        if (requestStatus === 'fulfilled') {
            reset();
            navigate('/bookings', { state: { me:payload } });
        }
    };
    return (
        <div className={css.mainAuth}>
            <div className={css.login}>
                <form className={css.formLoginAdmin} onSubmit={handleSubmit(login)}>
                    <span className={css.labelName}>Електрона пошта</span>
                    <input
                        id="email"
                        type="text"
                        placeholder="email"
                        className={css.label}
                        {...register('email')}
                    />

                    <span className={css.labelName}>Пароль</span>
                    <input
                        id="password"
                        type="text"
                        placeholder="password"
                        className={css.label}
                        {...register('password')}
                    />

                    <button>Вхід</button>
                    {errors && <span>{errors.detail}</span>}
                </form>
            </div>
        </div>
    );
};

export { AuthLogin };



