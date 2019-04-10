import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
                <div className="Header">
                    <header>
                    
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a class="navbar-brand" img src="/pic/StuHome.png"></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarColor02">
                                <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/">Home </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Login">Connexion </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/Inscription"> Inscription </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/DevenirHote"> Devenir Hote </Link></a>
                                </li>
                                </ul>
                            
                                <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                                <button class ="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                </form>

                            </div>
                    
                        </nav>
                    
                    </header>
                    <br/><br/>
                </div>
        );
    }
}

export default Header;