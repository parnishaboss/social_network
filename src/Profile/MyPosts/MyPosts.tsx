import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsType} from '../../redux/state';


type myPostsType = {
    posts: Array<postsType>
}

export const MyPosts:React.FC<myPostsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                <button className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}