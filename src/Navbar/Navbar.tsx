import React from 'react';
import s from './Navbar.module.css'
import {NavLink, useLocation} from 'react-router-dom';


export const Navbar = () => {
    const location = useLocation()
    return (
        <div className={s.navbar}>
            <div className={s.item__block}>
                <NavLink
                    className={`${location.pathname === '/profile' ? s.active : s.item}`}
                    to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={s.item__block}>
                <NavLink
                    className={`${location.pathname === '/dialogs' ? s.active : s.item}`}
                    to="/dialogs">
                    Dialogs
                </NavLink>
            </div>
            <div className={s.item__block}>
                <NavLink
                    className={`${location.pathname === '/messages' ? s.active : s.item}`}
                    to="/messages">
                    Messages
                </NavLink>
            </div>
            <div className={s.item__block}>
                <NavLink
                    className={`${location.pathname === '/news' ? s.active : s.item}`}
                    to="/news">
                    News
                </NavLink>
            </div>
            <div className={s.item__block}>
                <NavLink
                    className={`${location.pathname === '/settings' ? s.active : s.item}`}
                    to="/settings">
                    Settings
                </NavLink>
            </div>
        </div>
    )
}