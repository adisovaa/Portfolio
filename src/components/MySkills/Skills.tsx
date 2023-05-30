import React from 'react';
import ActionAreaCard from "./Card/Card";
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsContainer}>
            <div className={s.skillsTitle}>
                <h1>My Skills</h1>
            </div>
            <ActionAreaCard/>
        </div>
    );
};
