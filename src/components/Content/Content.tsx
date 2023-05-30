import React from 'react';
import s from "./Content.module.css";

export const Content = () => {
    return (
        <section>
            <div className={s.aboutPage}>
                <div className={s.aboutPageText}>
                    <h2>Hello World!
                        <span className={s.aboutPageSpan}>My name is Chynara Adis. </span>
                        <p>I am Front-End Developer</p></h2>
                </div>

                <div className={s.aboutPageImg}>
                    <img
                        src='https://media.sketchfab.com/models/e1a4cddfa46c4b03a0f62b129e8a6624/thumbnails/2639dff0d26e4325b4f8918f5beb55bb/53069635cdf54005b10f98141ca7dee6.jpeg'/>
                </div>
            </div>
        </section>
    );
};
