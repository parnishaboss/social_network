import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {dialogsPageType} from '../redux/state';

type dialogType = {
    state: dialogsPageType
}

export const Dialogs: React.FC<dialogType> = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>)
    const [newTitle, setNewTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const addPost = () => {
        console.log(newTitle)
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
                <input onChange={onChangeHandler} type="text"/>
                <button onClick={addPost}>click me</button>
            </div>
        </div>
    )
}