import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Col, Row, Button} from 'react-bootstrap';


class Inscription extends Component {
    
    
  render() {
    return (
      <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="Text" placeholder="Nom" />
    </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Prenom</Form.Label>
      <Form.Control type="Text" placeholder="Prenom" />
    </Form.Group>
    </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Entrez votre email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Mot de Passe</Form.Label>
      <Form.Control type="password" placeholder="Mot de Passe" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Addresse</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Addresse</Form.Label>
    <Form.Control placeholder="Appartement, Rue, Etage" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Ville</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Etat</Form.Label>
      <Form.Control as="select">
        <option>...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
    
    </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="J'accepte les conditions d'utilisation" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Envoyer
  </Button>
</Form>
    );
  }
 }

  ReactDOM.render(
    <Inscription />,
    document.getElementById('root')
  );
 

  
export default Inscription;