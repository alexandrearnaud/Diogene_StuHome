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
          habitations: [],
          // title:'',
          // city:'',
          // typehab:'',
          // nbtrav:'',
          // rankhost:'',
          // price:'',
          // selectRoom:'',
          // selectBed:'',
          // image: null,
          // url: '',
       
        }
      }

      componentDidMount() {
        // Utilisation classique (pensez bien à comparer les props) :
        // if (this.props.userID !== prevProps.userID) {
            this.afficheAnnonce();
      }

      async afficheAnnonce() {
        // e.preventDefault();
        try {
          const citiesRef = await firebase.firestore().collection("PostHab");
          console.log('fetching');
          citiesRef.get().then(snapshot => {
            console.log('fetched');
            const habitations = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
              this.setState({habitations});
            //   snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
          });
       }
        catch(error) {
          console.log('Error getting documents', error);
        };
      }
    
    render(){


        console.log('habs:', this.state.habitations);
        const habitations = this.state.habitations.map(hab => (
          <Card style={{ width: '' }} key={hab.id}>
          <Row>
            <Col md="4">
              <Card.Img variant="top" src={hab.url} />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title>{hab.title}</Card.Title>
                <h6> {hab.city} </h6>
                <Card.Text>
                  Prix : {hab.price} €
                </Card.Text>
                <Button variant="primary" href={`/FicheAnnonces/${hab.id}`}>Voir en détails</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        ));

        return (
          <>
            {habitations}
          </>
        )

        // return(
        //   <Card style={{ width: '' }}>
        //   <Row>
        //     <Col md="4">
        //       <Card.Img variant="top" src={annecy} />
        //     </Col>
        //     <Col md="8">
        //       <Card.Body>
        //         <Card.Title>Nom Appart</Card.Title>
        //         <h6> Nom de la ville </h6>
        //         <Card.Text>
        //           Some quick example text to build on the card title and make up the bulk of
        //           the card's content.
        //         </Card.Text>
        //         <Button variant="primary">Voir en détails</Button>
        //       </Card.Body>
        //     </Col>
        //   </Row>
        // </Card>
        // );
    }
}

export default Annonces;