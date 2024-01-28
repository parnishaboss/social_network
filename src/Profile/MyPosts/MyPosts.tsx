import React, {MouseEventHandler, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsType} from '../../redux/state';


type myPostsType = {
    posts: Array<postsType>
}

export const MyPosts:React.FC<myPostsType> = (props) => {
    const [taskTitle, setTaskTitle] = useState<any>('')
    const newTask = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    const addTask = () => {
        console.log(taskTitle)
    }
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input onChange={newTask} className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                <button onClick={addTask} className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}