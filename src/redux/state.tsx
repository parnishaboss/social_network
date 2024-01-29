import {v1} from 'uuid';

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
    addPost: (postMessage: string) => void
    changeNewText:(newText: string) => void
    addMessage:(message: string) => void
    changeNewMessage:(newText: string) => void
    subscribe:(observer: () => void) => void
    getState:() => stateType
    callSubscriber:() => void
}

export let store:storeType = {
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
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('state change')
    },
    addPost(postMessage: string) {
        let newPost: postsType = {
            id: v1(),
            message: postMessage,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this.callSubscriber()
        this._state.profilePage.newPostText = ''
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber()
    },
    addMessage(message: string) {
        let newMessage: messagesType = {
            id: v1(),
            message: message
        }
        this._state.dialogsPage.messages.push(newMessage)
        this.callSubscriber()
        this._state.dialogsPage.newMessageText = ''
    },
    changeNewMessage(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this.callSubscriber()
    },
    subscribe(observer) {
        this.callSubscriber = observer
    }
}















