import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './img/logo3.png';
import firebase from './Fire';
import MainRouter from './routes.js';

class Header extends Component {
    constructor(props){
        super(props);
        
        
      }

       signOut(e){
        console.log("Deconnectez vous");
        e.preventDefault();
        firebase.auth().signOut().then(function() {
            console.log("Deconnction");
        }, function(error){
            console.error('Erreur pendant la deconnection', error);
        });
        document.location.href = '/';
    };

    render() {
        const LinkStyle = {
            color : 'white', 
            textDecoration: 'none',
            paddingRight: '10px'
          }
          console.log("user" + this.props.user);

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
                                
                                {this.props.user ? 
                                    ''
                                    :
                                    <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Login" style={LinkStyle}>Connexion </Link></a>
                                    <a class="nav-link"> <Link to="/Inscription" style={LinkStyle}> Inscription </Link></a>
                                </li>
                                    
                                }
                                
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Annonces" style={LinkStyle}> Annonces </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/TemplateFiche" style={LinkStyle}> TemplateAnnonce </Link></a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/FicheAnnonces" style={LinkStyle}> Fiche Annonce </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/PostAnnonces" style={LinkStyle}> Poster une Annonce </Link></a>
                                </li>

                                </ul>
                            
                                <form class="form-inline my-1 my-lg-1">
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.signOut}> Deconnexion </button>
                                </form>

                                <form class="form-inline my-2 my-lg-0">
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