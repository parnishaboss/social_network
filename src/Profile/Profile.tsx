import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {actionTypes, profilePageType} from '../redux/state';

type profileType = {
    state: profilePageType
    dispatch: (action: actionTypes) => void
}
export const Profile: React.FC<profileType> = (props) => {
    return (
        <div>
            <img className={s.profile__img}
                 src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"
                 alt=""/>
            <div className={s.profile__wrapper}>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch}
                         posts={props.state.posts}
                         message={props.state.newPostText}
                />
            </div>
        </div>
    )
}