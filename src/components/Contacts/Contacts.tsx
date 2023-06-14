import * as React from 'react'
import style from './Contacts.module.css'
import commonStyles from "../common/styles/commonStyles.module.css";

export default function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${commonStyles.container} ${style.contactBlock}`}>
                <h2 className={style.skillsTitle}>Contacts</h2>
                <div className={style.form}>
                    <input type='text' placeholder='name'/>
                    <input type='email' placeholder='email'/>
                    <textarea placeholder="text"/>
                </div>
                <button className={style.formBtn}>Send</button>
            </div>
        </div>
    );
}