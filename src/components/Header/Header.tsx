import React from 'react';
import {NavLink} from "react-router-dom";

import {Switch} from "@mui/material";

import css from './Header.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeTheme} from "../../redux/slices/themeSlice";




const Header = () => {
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(state => state.themeReducer);



    return (
        <div className={css.Scrolled} >
            <div className={css.Header }>
                <div className={css.Logo}>Клініка</div>
                <div  className={css.Navlink}>
                    <NavLink to={'/auth/sign-up'}>Реєстрація</NavLink>
                    <NavLink to={'/auth/sign-in'}>Вхід</NavLink>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div >
                        <Switch
                            checked={theme}
                            onChange={()=>dispatch(changeTheme())}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>

                </div>


            </div>
        </div>

    );
};

export {
    Header
}