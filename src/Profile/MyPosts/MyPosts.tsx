import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    let postsData = [
        {id:1, message: 'first post', likesCount: 21},
        {id:2,message: 'second post', likesCount: 42},
        {id:3,message: 'third post', likesCount: 12},
    ]
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                <button className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                    <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                </div>
            </div>
        </div>
    )
}