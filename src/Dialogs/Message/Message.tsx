import React from 'react';
import s from './Message.module.css'

type messageType = {
    message:string
}

export const Message = (props:messageType) => {
    return (
            <div className={s.message}>
                {props.message}
            </div>
    )
}