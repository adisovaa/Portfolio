import React from 'react';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Skills} from "./components/MySkills/Skills";
import {Works} from "./components/MyWorks/Works";
import {Remote} from "./components/RemoteJob/Remote";
import s from './App.module.css'
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <div className={s.App}>
            <div className={s.appWrapper}>
                <Header/>
                <Content/>
                <Skills/>
                <Works/>
                <Remote/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;