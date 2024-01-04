import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                <button className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    <Post message='first post' likesCount={23}/>
                    <Post message='second post' likesCount={123}/>
                    <Post message='third post' likesCount={3}/>
                </div>
            </div>
        </div>
    )
}