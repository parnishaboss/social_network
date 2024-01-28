import React from 'react';
import s from './Post.module.css'

type postType = {
    message:string
    likesCount:number
}

export const Post: React.FC<postType>  = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.post__avatar}
                     src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""/>
                <span className={s.post__text}>
                Тут написан {props.message} типо . . .
            </span>
            </div>
            <div className={s.likes}>
                <span>Likes - {props.likesCount}</span>
            </div>
        </div>

    )
}