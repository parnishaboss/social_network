import {v1} from 'uuid';
import profileRedecer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

export type messagesType = {
    id: string;
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
    newPostText: string
}
export type dialogsPageType = {
    newMessageText: string
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
export type storeType = {
    _state: stateType
    subscribe: (observer: () => void) => void
    getState: () => stateType
    _callSubscriber: () => void
    dispatch: (action: actionTypes) => void
}
export type addPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
export type changeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}
export type addMessageActionType = {
    type: 'SEND-MESSAGE'
    message: string
}
export type changeNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type actionTypes =
    addPostActionType
    | changeNewTextActionType
    | addMessageActionType
    | changeNewMessageActionType

export let store: storeType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: 'first post', likesCount: 21},
                {id: v1(), message: 'second post', likesCount: 42},
                {id: v1(), message: 'third post', likesCount: 12},
            ],
        },
        dialogsPage: {
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Vasya'},
                {id: 5, name: 'Kolya'},
            ],
            messages: [
                {id: v1(), message: 'Privet'},
                {id: v1(), message: 'How are you '},
                {id: v1(), message: 'I am from London !'}
            ],
        },
        sidebarPage: {
            friend: [
                {id: v1(), name: 'Vasya', logo: 'https://icon-library.com/images/avatars-icon/avatars-icon-14.jpg'},
                {
                    id: v1(),
                    name: 'Katya',
                    logo: 'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-8.jpg'
                },
                {
                    id: v1(),
                    name: 'Alina',
                    logo: 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-22.jpg'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {


        // this._state.profilePage =  profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action)

        if (action.type === 'ADD-POST') {
            let newPost: postsType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage: messagesType = {
                id: v1(),
                message: action.message
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
            this._state.dialogsPage.newMessageText = ''
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber()
        }

    },
}

export const addPostAC = (postMessage: string): addPostActionType => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    }
}
export const newTextChangeHandlerAC = (text: string): changeNewTextActionType => {
    return {type: 'CHANGE-NEW-TEXT', newText: text}
}
export const sendMessageAC = (message: string): addMessageActionType => {
    return {
        type: 'SEND-MESSAGE',
        message: message
    }
}
export const updateNewMessageBodyAC = (newText: string): changeNewMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: newText
    }
}












