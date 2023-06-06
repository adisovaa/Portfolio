import React from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";
import commonStyles from "../common/styles/commonStyles.module.css";

export const Header = () => {
    return (
        <header>
            <div className={commonStyles.container}>
                <div className={style.classHeader}>
                    <Nav/>
                </div>
            </div>
        </header>
    );
};
