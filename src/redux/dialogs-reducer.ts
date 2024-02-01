import {messagesType} from './state';
import {v1} from 'uuid';
import {addMessageActionType} from './state';
import {dialogsPageType} from './state';
import {changeNewMessageActionType} from './state';

const dialogsReducer = (state: dialogsPageType, action: addMessageActionType | changeNewMessageActionType) => {
    if (action.type === 'SEND-MESSAGE') {
        let newMessage: messagesType = {
            id: v1(),
            message: action.message
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageText = action.body
    }
    return state
}

export default dialogsReducer