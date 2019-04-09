import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" img src="/pic/StuHome.png"></a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Connexion</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Inscription</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Devenir Hote</a>
      </li>
    </ul>
    
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
    <button class ="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
    

    </div>
        
        </nav>
        
        </header>
        <body>
          <div id="Test">
          <p>Bruh</p>
          
          </div>
        </body>

     <footer id="footer">

       <div id="link">

       <li><a href="andy.agban@gmail.com">Contactez nous</a></li>
       <li><a href="#">Mention légales</a></li>
       <li><a href="#">CGV</a></li>

       </div>
    
    </footer>
      </div>
    );
  }
}

export default App;
