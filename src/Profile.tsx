import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://bogatyr.club/uploads/posts/2021-11/thumbs/1636964350_6-bogatyr-club-p-krasivii-fon-goroda-6.jpg"
                    alt=""/>
            </div>
            <div>ava + discription</div>
            <div>
                My posts
                <div>
                    NEW POST
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    )
}