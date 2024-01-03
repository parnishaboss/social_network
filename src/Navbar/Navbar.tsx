import React from 'react';
import s from './Navbar.module.css'


export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item__block}>
                <a className={s.item} href="">
                    Profile
                </a>
            </div>
            <div className={s.item__block}>
                <a className={s.item} href="">
                    Messages
                </a>
            </div>
            <div className={s.item__block}>
                <a className={`${s.item} ${s.active}`} href="">
                    News
                </a>
            </div>
            <div className={s.item__block}>
                <a className={s.item} href="">
                    Settings
                </a>
            </div>
        </div>
    )
}