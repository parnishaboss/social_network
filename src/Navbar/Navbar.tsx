import React from 'react';
import s from './Navbar.module.css'


export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item__block}>
                <a className={s.item} href="/profile">
                    Profile
                </a>
            </div>
            <div className={s.item__block}>
                <a className={s.item} href="/dialogs">
                    Dialogs
                </a>
            </div>
            <div className={s.item__block}>
                <a className={s.item} href="/messages">
                    Messages
                </a>
            </div>
            <div className={s.item__block}>
                <a className={`${s.item} ${s.active}`} href="/news">
                    News
                </a>
            </div>
            <div className={s.item__block}>
                <a className={s.item} href="/settings">
                    Settings
                </a>
            </div>
        </div>
    )
}