import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.header__logo}
                src="https://cdn-icons-png.flaticon.com/512/226/226772.png"
                alt=""/>
            Hello, samurai! Let's go!
        </div>
    )
}