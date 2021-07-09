import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


const Header = () => {
    return(
        <div className={s.basicDiv}>
            <NavLink to="/authorization">Авторизация</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
        </div>
    )
}

export default Header