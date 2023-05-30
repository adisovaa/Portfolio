import React from 'react';
import s from './Works.module.css'
import Work from "./Work/Work";


export const Works = () => {
    return (
        <div className={s.works}>
            <div className={s.worksTitle}>
                <h1>мои работы</h1>
            </div>
            <Work/>
        </div>
    );
};