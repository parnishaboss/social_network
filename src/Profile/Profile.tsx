import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from './MyPosts/Post/Post';

export type profileType = {
    posts: Array<postType>
}

export const Profile = (props: profileType) => {
    return (
        <div>
            <img className={s.profile__img}
                 src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"
                 alt=""/>
            <div className={s.profile__wrapper}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
}