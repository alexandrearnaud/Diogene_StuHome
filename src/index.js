import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import QuiSommesNous from './QuiSommesNous';
import CGV from './CGV';
import MentionsLegales from './MentionsLegales';
import ContactezNous from './ContactezNous';

// The App component contains a switch with our routes
const AppStuHome = () => 
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/QuiSommesNous' component={QuiSommesNous} />
    <Route exact path='/CGV' component={CGV} />
    <Route exact path='/MentionsLegales' component={MentionsLegales} />
    <Route exact path='/ContactezNous' component={ContactezNous} />
  </Switch>;

// The app MUST be surrounded by the BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <AppStuHome />
  </BrowserRouter>,
  document.getElementById('root')
);
