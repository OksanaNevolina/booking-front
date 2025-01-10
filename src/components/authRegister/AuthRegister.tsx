import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuthRegister} from '../../interfaces';
import { authActions } from '../../redux';
import css from './AuthRegister.module.css'

const AuthRegister = () => {
    const { register, reset, handleSubmit } = useForm<IAuthRegister>();

    const { errors } = useAppSelector((state) => state.authReducer);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerInClinic: SubmitHandler<IAuthRegister> = async (user)=> {
        console.log(user);
        const {
            meta: { requestStatus },
        } = await dispatch(authActions.registerInClinic({ user }));


        if (requestStatus === 'fulfilled') {
            reset();
            navigate('/auth/sign-in');
        }
    };
    return (
        <div className={css.mainAuth}>
            <div className={css.login}>
                <form className={css.formLoginAdmin} onSubmit={handleSubmit(registerInClinic)}>
                    <span className={css.labelName}>Ім'я</span>
                    <input
                        id="name"
                        type="text"
                        placeholder="name"
                        className={css.label}
                        {...register('name')}
                    />
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

                    <button>Зареєструватися</button>
                    {errors && <span>{errors.detail}</span>}
                </form>
            </div>
        </div>
    );
};
export { AuthRegister };

