import {rerenderEntireTree} from '../render';
import {v1} from 'uuid';

export type messagesType = {
    id: number;
    message: string;
}
export type dialogsType = {
    id: number;
    name: string;
}
export type postsType = {
    id: string
    message: string;
    likesCount: number;
}
export type friendType = {
    id: string
    name: string
    logo: string
}
export type profilePageType = {
    posts: Array<postsType>
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type sidebarPageType = {
    friend: Array<friendType>
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebarPage: sidebarPageType
}


export let state: stateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'first post', likesCount: 21},
            {id: v1(), message: 'second post', likesCount: 42},
            {id: v1(), message: 'third post', likesCount: 12},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Misha'},
            {id: 4, name: 'Vasya'},
            {id: 5, name: 'Kolya'},
        ],
        messages: [
            {id: 1, message: 'Privet'},
            {id: 2, message: 'How are you '},
            {id: 3, message: 'I am from London !'}
        ],
    },
    sidebarPage: {
        friend: [
            {id: v1(), name: 'Vasya', logo: 'https://icon-library.com/images/avatars-icon/avatars-icon-14.jpg'},
            {id: v1(), name: 'Katya', logo: 'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-8.jpg'},
            {id: v1(), name: 'Alina', logo: 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-22.jpg'},
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id:v1(),
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}