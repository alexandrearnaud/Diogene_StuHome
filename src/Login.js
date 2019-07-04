import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from "react-router-dom";
import logo from './logo.svg';
import { Form, Col, Row, Button} from 'react-bootstrap';
// import firebase from './firebase-app';
//import 'firebase/auth';
import {firebase} from './Fire';
import Home from './Home';
import MainRouter from './routes';



class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:''
    };
  };

  async login(e) {
    //console.log('logging in', this.state.email);
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      console.log('Vous êtes bien connecté au site', userCredential);
      this.props.history.push("/");
    } 
    catch(error) {
      console.log(error);
      alert(`Vous n avez pas rentré le bon email ou le bon mot de passe: ${error.message}`);
      this.props.history.push("/Login");
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="Login">
      <h1> Connectez-vous à votre compte </h1>


      <br/>
        <Form>
          {/* Adresse Mail  */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="email" type="email" placeholder="Email" onChange={this.handleChange}/>
            </Col>
          </Form.Group>

          {/* Mot de passe  */}
          <Form.Group as={Row} controlId="formHorizontalNom">
            <Form.Label column sm={2}>
              Mot de passe
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="password" type="password" placeholder="Mot de passe"  onChange={this.handleChange}/>
            </Col>
          </Form.Group>
          
          <div>
            <Form.Group as={Row}>
              <Col sm={{ span: 2, offset: 2 }}>
                <Button type="submit" onClick={this.login}> Se connecter </Button>
                
              </Col>
              <Col sm={{ span: 4}}>
                <Button onclick=""> Mot de passe oublié </Button>
              </Col>
            </Form.Group>
          </div>
    
        </Form>
      </div>
    );
  }
}



export default Login;
