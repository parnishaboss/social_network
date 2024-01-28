export type messagesType = {
    id: number;
    message: string;
}
export type dialogsType = {
    id: number;
    name: string;
}
export type postsType = {
    message: string;
    likesCount: number;
}
export type friendType = {
    name: string;
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
            {message: 'first post', likesCount: 21},
            {message: 'second post', likesCount: 42},
            {message: 'third post', likesCount: 12},
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
            {name: 'Vasya', logo: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-9.jpg'},
            {name: 'Katya', logo: 'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-8.jpg'},
            {name: 'Alina', logo: 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-22.jpg'},
        ]
    }
}