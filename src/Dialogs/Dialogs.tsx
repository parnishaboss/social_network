import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                <div>
                    <NavLink className={s.dialog} to="/dialogs/1">
                        Sasha
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.dialog} to="/dialogs/2">
                        Sveta
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.dialog} to="/dialogs/3">
                        Misha
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.dialog} to="/dialogs/4">
                        Marina
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.dialog} to="/dialogs/5">
                        Karina
                    </NavLink>
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    <div className={s.message}>Privet</div>
                    <div className={s.message}>How are you ?</div>
                    <div className={s.message}>I am from London !</div>
                </div>
            </div>
        </div>
    )
}