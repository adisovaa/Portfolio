import React from 'react';
import style from "./Main.module.css";
import commonStyles from '../common/styles/commonStyles.module.css';

export const Main = () => {
    return (
        <div className={style.mainBlocks}>
            <div className={commonStyles.container}>
                <div className={style.mainBlock}>
                    <div className={style.mainBlockText}>
                        <span>Hi There!</span>
                        <h1 className={style.aboutPageSpan}>My name is Chynara Adis. </h1>
                        <p>I am Front-End Developer</p>
                    </div>

                    <div className={style.mainBlockImg}></div>
                </div>
            </div>
        </div>
    );
};
