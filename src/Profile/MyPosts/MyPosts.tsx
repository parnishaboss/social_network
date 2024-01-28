import React, {useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsType} from '../../redux/state';


type myPostsType = {
    posts: Array<postsType>
    addPost:(postMessage:string) => void
}

export const MyPosts:React.FC<myPostsType> = (props) => {
    const [taskTitle, setTaskTitle] = useState<string>('')
    const newTask = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    let addPost = () => {
        props.addPost(taskTitle)
        setTaskTitle('123')
    }
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input onChange={newTask} className={s.posts__input} type="text" placeholder="Введите сообщение..."/>
                <button onClick={addPost} className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}