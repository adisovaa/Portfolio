import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Skills} from "./components/Skills/Skills";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Remote} from "./components/RemoteJob/Remote";
import s from './App.module.css'
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;