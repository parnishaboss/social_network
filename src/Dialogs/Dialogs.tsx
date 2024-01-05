import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div >
            <h2>DIALOGS</h2>
            <div >
                <div >
                    <ul>
                        <li>Andrew</li>
                        <li>Dmitry</li>
                        <li>Sasha</li>
                        <li>Sveta</li>
                        <li>Genadii</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/512/226/226772.png" alt=""/>
                        <span>Dmitry</span>
                    </div>
                    <div>
                        <span>sandk jnkj; aml;sm adalksd lk</span>
                    </div>
                </div>
            </div>
        </div>
    )
}