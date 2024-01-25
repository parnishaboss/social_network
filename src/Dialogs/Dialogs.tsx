import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                <DialogsItem name='Sasha' id={1}/>
                <DialogsItem name='Sveta' id={2}/>
                <DialogsItem name='Misha' id={3}/>
                <DialogsItem name='Vasya' id={4}/>
                <DialogsItem name='Kolya' id={5}/>
            </div>
            <div>
                <div className={s.messages}>
                    <Message message='Privet'/>
                    <Message message='How are you ?'/>
                    <Message message='I am from London !'/>
                </div>
            </div>
        </div>
    )
}