import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from './Header'
import Footer from './Footer'
import App from './App';
import QuiSommesNous from './QuiSommesNous';
import CGV from './CGV';
import MentionsLegales from './MentionsLegales';
import ContactezNous from './ContactezNous';
import Login from './Login';
import TemplateFiche from './TemplateFiche';
import TemplateProfil from './TemplateProfil';
import Inscription from './Inscription';

export default function MainRouter () {
    return (
        <BrowserRouter>
            <Header/>
            <Container>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/QuiSommesNous" component={QuiSommesNous}/>
                    <Route exact path="/CGV" component={CGV}/>
                    <Route exact path="/MentionsLegales" component={MentionsLegales}/>
                    <Route exact path="/ContactezNous" component={ContactezNous}/>
                    <Route exact path="/TemplateFiche" component={TemplateFiche}/>
                    <Route exact path="/TemplateProfil" component={TemplateProfil}/>                    <Route exact path="/Inscription" component={Inscription}/>
                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}