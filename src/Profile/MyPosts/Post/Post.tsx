import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img className={s.post__avatar}
                 src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""/>
            <span className={s.post__text}>
                Тут написан первый пост типо . . .
            </span>
        </div>
    )
}