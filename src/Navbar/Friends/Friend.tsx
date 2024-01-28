import React from 'react';
import s from './Friend.module.css'

type friendType = {
    name:string
    logo:string
}

export const Friend:React.FC<friendType>= (props) => {
    return (
        <div className={s.friends__item}>
            <img className={s.friends__logo} src={props.logo} alt=""/>
            <div className={s.friends__name}>{props.name}</div>
        </div>
    )
}