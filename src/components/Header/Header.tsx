import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className={s.menu}>
                    <li>Main</li>
                    <li>Skills</li>
                    <li>My projects</li>
                    <li>My contacts</li>
                </ul>
            </nav>
        </header>
    );
};
