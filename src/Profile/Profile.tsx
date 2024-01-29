import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {profilePageType} from '../redux/state';

type profileType = {
    state: profilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText:string) => void
}
export const Profile: React.FC<profileType> = (props) => {
    return (
        <div>
            <img className={s.profile__img}
                 src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"
                 alt=""/>
            <div className={s.profile__wrapper}>
                <ProfileInfo/>
                <MyPosts addPost={props.addPost}
                         posts={props.state.posts}
                         message={props.state.newPostText}
                         changeNewText={props.changeNewText}
                />
            </div>
        </div>
    )
}