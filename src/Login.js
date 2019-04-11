import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Form, Col, Row, Button} from 'react-bootstrap';

class Login extends Component {
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
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          {/* Mot de passe  */}
          <Form.Group as={Row} controlId="formHorizontalNom">
            <Form.Label column sm={2}>
              Mot de passe
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Mot de passe" />
            </Col>
          </Form.Group>
          
          <div>
            <Form.Group as={Row}>
              <Col sm={{ span: 2, offset: 2 }}>
                <Button type="submit"> Se connecter </Button>
                
              </Col>
              <Col sm={{ span: 4}}>
                <Button onclick="window.location.href='www.google.fr'"> Mot de passe oublié </Button>
              </Col>
            </Form.Group>
          </div>
    
        </Form>
      </div>
    );
  }
}

export default Login;
