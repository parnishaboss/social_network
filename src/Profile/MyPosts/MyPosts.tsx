import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsType} from '../../redux/state';


type myPostsType = {
    posts: Array<postsType>
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
    message: string
}

export const MyPosts: React.FC<myPostsType> = (props) => {

    const addPost = () => {
        props.addPost(props.message)
    }
    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newTextChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeNewText(e.currentTarget.value)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input className={s.posts__input}
                       type="text"
                       onChange={newTextChangeHandler}
                    placeholder="Введите сообщение..."
                       value={props.message}
                />
                <button onClick={addPost} className={s.posts__button}>send</button>
                <div className={s.posts__block}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}