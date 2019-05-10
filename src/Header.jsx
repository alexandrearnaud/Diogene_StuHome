import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './img/logo3.png';


class Header extends Component {
    render() {
        const LinkStyle = {
            color : 'white', 
            textDecoration: 'none',
            paddingRight: '10px'
          }

        return (
                <div className="Header">
                    <header>
                    
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarColor02">
                                <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" >
                                    <Link to="/" style={LinkStyle}>
                                    <img 
                                    src={logo} 
                                    style={{height: "15%", width: "15%"}}
                                    alt="logo StuHome" /> StuHome
                                    </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Login" style={LinkStyle}>Connexion </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Inscription" style={LinkStyle}> Inscription </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/DevenirHote" style={LinkStyle}> Devenir Hote </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/TemplateFiche" style={LinkStyle}> Template fiche </Link></a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/TemplateProfil" style={LinkStyle}> Template Profil </Link></a>
                                </li>

                                </ul>
                            
                                <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Recherche"></input>
                                <button class ="btn btn-secondary my-2 my-sm-0" type="submit">Recherche</button>
                                </form>

                            </div>
                    
                        </nav>
                    
                    </header>
                    <br/> <br/>
                </div>
        );
    }
}

export default Header;