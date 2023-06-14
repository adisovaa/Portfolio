import React from 'react';
import styles from './Work.module.css'

type PropsType = {
    title: string
    description: string
    src: string
}

const Work = (props: PropsType) => {
    return (
        <div className={styles.workBlock}>
            <div className={styles.imageContainer}>
                <img src={props.src} alt={'js'}/>
                <button className={styles.workBtn}>Show</button>
            </div>

            <div className={styles.workText}>
                <span>{props.title}</span>
                <h5>{props.description}</h5>
            </div>
        </div>
    );
};

export default Work;