import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {actionTypes, sendMessageAC, updateNewMessageBodyAC, dialogsPageType} from '../redux/state';

type dialogType = {
    state: dialogsPageType
    dispatch: (action: actionTypes) => void
}

export const Dialogs: React.FC<dialogType> = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>)
    const onSendMessage = () => {
        props.dispatch(sendMessageAC(props.state.newMessageText))
    }
    const newMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(text))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
                <input onChange={newMessageTextHandler}
                       type="text"
                       placeholder="Ваше сообщение.."
                       value={props.state.newMessageText}
                />
                <button onClick={onSendMessage}>click me</button>
            </div>
        </div>
    )
}