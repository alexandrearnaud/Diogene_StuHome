import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header>
          
          <nav>
            
          </nav>
        </header>

        <body>
          <form>
            <span>
              Veuillez vous identifier pour continuer 
            </span>
            <br></br>
            <br></br>


            <div>
              <input class="input100" type="text" name="email" placeholder='Email'></input>
            </div>

            <div>
             <input class="input100" type="password" name="pass" placeholder='Mot de passe'></input>
            </div>

            <br></br>

            <button class="primary"> Login</button>
          </form>          
        </body>

        <footer>
          
        </footer>
      </div>
    );
  }
}

export default Login;
