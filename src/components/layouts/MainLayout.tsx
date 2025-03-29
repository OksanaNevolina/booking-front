import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header/Header";
import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div className={css.mainBox}>
            <Header/>
            <Outlet />
        </div>
    );
};

export { MainLayout };