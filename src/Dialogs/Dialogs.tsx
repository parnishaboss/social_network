import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Misha
                </div>
                <div className={s.dialog}>
                    Marina
                </div>
                <div className={s.dialog}>
                    Karina
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    <div className={s.message}>Privet</div>
                    <div className={s.message}>1dsfg m kdfmg  fdlkg lkdf</div>
                    <div className={s.message}>pwewepr[ew[p   eppepepe p pe </div>
                </div>
            </div>
        </div>
    )
}