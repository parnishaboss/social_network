import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Kolya'},
    ]
    let messagesData = [
        {message: 'Privet'},
        {message: 'How are you '},
        {message: 'I am from London !'}
    ]
    let dialogsElement = dialogsData.map(d =>
        <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElement = messagesData.map(m => <Message message={m.message}/>)
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