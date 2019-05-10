import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import map from './img/map.png'
import { Form, Col, Row, Button} from 'react-bootstrap';

class ContactezNous extends Component {
  render() {
    return (
      <div className="ContactezNous">
      <h1> Contactez-nous </h1>
        <p>&nbsp;</p>
        <img src={map} alt="map QG StuHome" style={{height: "60%", width: "60%"}}/>
        <h3>Diog&egrave;ne</h3>
        <p>2 all&eacute;e Louis de Brooglie,</p>
        <p>74000 Annecy</p>
        <p>&nbsp;</p>
        <p>Tel: 04.25.36.xx.xx</p>
        <p>mail : diogene@stuhome.com</p>
      </div>
    );
  }
}

export default ContactezNous;
