import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

type dialogType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type dialogsType = {
    id: number;
    name: string
}
export type messagesType = {
    id: number;
    message: string
}


export const Dialogs = (props: dialogType) => {
    let dialogsElement = props.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    )
}