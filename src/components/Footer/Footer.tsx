import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerText}>
                <h1>Chynara Adis</h1>
                <div className={s.footerBlocks}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>
            </div>
        </footer>
    );
};


