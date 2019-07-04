import { Card, Button, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostAnnonces from './PostAnnonces';
import annecy from './img/annecy.jpg';
import { firebase } from './Fire';
 


class Annonces extends Component{
    constructor(props) {
        super(props);
        this.state = {

          title:'',
          city:'',
          typehab:'',
          nbtrav:'',
          rankhost:'',
          price:'',
          selectRoom:'',
          selectBed:'',
          image: null,
          url: '',
       
        }
      }
    
    render(){
      let citiesRef = firebase.firestore().collection("PostHab");
let query = citiesRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      return (<Card style={{ width: '' }}>
      <Row>
        <Col md="4">
          <Card.Img variant="top" src={annecy} />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title>Nom Appart</Card.Title>
            <h6> {this.props.city} </h6>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" href={`/FicheAnnounce/${doc.id}`}>Voir en détails</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

        return(
          <Card style={{ width: '' }}>
          <Row>
            <Col md="4">
              <Card.Img variant="top" src={annecy} />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title>Nom Appart</Card.Title>
                <h6> Nom de la ville </h6>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Voir en détails</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        );
    }
}

export default Annonces;