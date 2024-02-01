import {addPostActionType, changeNewTextActionType, postsType, profilePageType} from './state';
import {v1} from 'uuid';


const profileRedecer = (state: profilePageType, action: addPostActionType | changeNewTextActionType) => {
    if (action.type === 'ADD-POST') {
        let newPost: postsType = {
            id: v1(),
            message: action.postMessage,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === 'CHANGE-NEW-TEXT') {
        state.newPostText = action.newText
        return state
    }
}

export default profileRedecer