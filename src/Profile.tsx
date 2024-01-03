import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.profile}>

            <img className={s.profile__img}
                 src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"
                 alt=""/>
            <div className={s.profile__wrapper}>
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
                <div>
                    <h3>My posts</h3>
                    <div>
                        <input className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                        <button className={s.posts__button}>send</button>
                        <div className={s.posts__block}>
                            <div className={s.item}>post1</div>
                            <div className={s.item}>post2</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}