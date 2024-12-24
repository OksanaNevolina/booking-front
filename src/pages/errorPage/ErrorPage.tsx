import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './ErrorPage.module.css';

const ErrorPage: FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page Not Found</h1>
            <p className={css.message}>
                The page you are looking for does not exist.
            </p>
            <div>
                <button className={css.button} onClick={goBack}>
                    Go Back
                </button>
                <button className={css.button} onClick={goHome}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export { ErrorPage };