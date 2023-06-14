import React from 'react';
import commonStyles from "../common/styles/commonStyles.module.css";
import style from "./Remote.module.css";

export const Remote = () => {
    return (
        <div className={style.remote}>
            <div className={`${commonStyles.container} ${style.remoteBlock}`}>
                <h1>Investigating options for remote work</h1>
                <button className={style.remoteBtn}>Button</button>
            </div>
        </div>
    )
};


