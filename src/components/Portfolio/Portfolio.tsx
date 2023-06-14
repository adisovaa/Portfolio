import React from 'react'
import style from './Portfolio.module.css'
import Work from "./Work/Work"
import commonStyles from "../common/styles/commonStyles.module.css";

export const Portfolio = () => {
    return (
        <div className={style.portfolio}>
            <div className={`${commonStyles.container} ${style.portfolioContainer}`}>
                <h2 className={style.portfolioTitle}>Portfolio</h2>
                <div className={style.portfolioBlock}>
                    <Work src={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}
                          title={'Weather'}
                          description={'description'}/>

                    <Work src={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}
                          title={'Weather'}
                          description={'description'}/>
                </div>
            </div>
        </div>
    )
}