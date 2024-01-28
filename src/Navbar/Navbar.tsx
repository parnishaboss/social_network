import React from 'react';
import s from './Navbar.module.css'
import {NavLink, useLocation} from 'react-router-dom';
import {sidebarPageType} from '../redux/state';
import {Friend} from './Friends/Friend';

type navbarType = {
    state: sidebarPageType
}

export const Navbar: React.FC<navbarType> = (props) => {
    const location = useLocation()
    let friendElement = props.state.friend.map(f => <Friend key={f.id} name={f.name} logo={f.logo}/>)
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
            <div className={s.friends__wrapper}>
                <div className={s.friends__title}>My friends</div>
                <div className={s.friends__block}>
                    {friendElement}
                </div>
            </div>
        </div>
    )
}