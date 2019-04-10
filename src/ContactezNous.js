import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Form, Col, Row, Button} from 'react-bootstrap';

class ContactezNous extends Component {
  render() {
    return (
      <div className="ContactezNous">
      <h1> Contactez-nous </h1>
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

          {/* Nom  */}
          <Form.Group as={Row} controlId="formHorizontalNom">
            <Form.Label column sm={2}>
              Nom
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Nom" />
            </Col>
          </Form.Group>

          {/* Prénom  */}
          <Form.Group as={Row} controlId="formHorizontalPrenom">
            <Form.Label column sm={2}>
              Prénom
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Prénom" />
            </Col>
          </Form.Group>

          {/* Objet du message  */}
          <Form.Group as={Row} controlId="formHorizontalObjetMsg">
            <Form.Label column sm={2}>
              Objet
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="select">
                <option> J'ai besoin d'aide pour la connexion à mon compte</option>
                <option> Je n'arrive pas à réserver un logement </option>
                <option> Je souhaite signaler un comportement inapproprié ou du contenu sensible</option>
                <option> Je souhaite signaler un problème de propriété intellectuelle</option>
              </Form.Control>
            </Col>
          </Form.Group>

          {/* Message  */}
          <Form.Group as={Row} controlId="formHorizontalMessage">
            <Form.Label column sm={2}>
              Message
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows="5" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit"> Envoyer </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ContactezNous;
