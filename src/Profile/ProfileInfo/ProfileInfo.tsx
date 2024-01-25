import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profile__block}>
            <img className={s.avatar}
                 src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" alt=""/>
            <div className={s.discriprion}>
                <span>Alex Жданович</span>
                <span>Date of birthday: 20 july 2000</span>
                <span>City:Minsk</span>
                <span>Education: BNTU</span>
                <span>Web-site:none</span>
            </div>
        </div>
    )
}
