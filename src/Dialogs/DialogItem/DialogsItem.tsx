import React from 'react';
import s from './DialogsItem.module.css'
import {NavLink, useLocation} from 'react-router-dom';

type dialogType = {
    name: string;
    id: number
}

export const DialogsItem = (props:dialogType) => {
    const path = '/dialogs/' + props.id
    const location = useLocation()
    return (
        <div className={s.dialogs__wrapper}>
            <img className={s.user__logo} src="https://cdn-icons-png.flaticon.com/512/226/226772.png" alt=""/>
            <NavLink className={`${location.pathname === path ? s.active : s.dialog}`}
                     to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}