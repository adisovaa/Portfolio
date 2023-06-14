import React from 'react';
import s from './Footer.module.css'
import commonStyles from "../common/styles/commonStyles.module.css";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${commonStyles.container} ${s.footerText}`}>
                <h2 className={s.footerTitle}>Chynara Adis</h2>
                <div className={s.footerBlocks}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>
                <h2 className={s.footerTitle}>2023 Copyright</h2>
            </div>
        </footer>
    );
};


