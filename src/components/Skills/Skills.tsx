import React from 'react';
import {Skill} from "./Skill/Skill";
import style from './Skills.module.css'
import commonStyles from "../common/styles/commonStyles.module.css";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${commonStyles.container} ${style.skillsContainer}`}>
                <h2 className={style.skillsTitle}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'description'}/>
                    <Skill title={'React'} description={'description'}/>
                    <Skill title={'TypeScript'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};
