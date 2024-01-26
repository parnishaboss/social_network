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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {/*{dialogsData.map((d) => {*/}
                {/*    <DialogsItem name={d.name} id={d.id}/>*/}
                {/*})}*/}
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>
        </div>
    )
}