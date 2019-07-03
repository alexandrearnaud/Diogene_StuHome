import { firebase } from './Fire';
import { db } from './Fire';
import React, {useState, useEffect} from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';


class Test extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.TestSendData = this.TestSendData.bind(this);
        this.state = {

            arrivalDate: '',
            departureDate: '',
            finalState: '',
            guestId: '',
            hostId: '',
            totalPrice: '', 
        }
      }

      handleChange(e) {
        this.setState ({ [e.target.name] : e.target.value });
      }

      TestSendData(e){
      e.preventDefault()
      let docRef = firebase.firestore().collection('booking').doc();
      let setAda = docRef.set({

            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            finalState: this.state.finalState,
            guestId: '0123',
            hostId: '1230',
            totalPrice: this.state.totalPrice,

      });
      }

      TestretriveData(e){
        let PostHRef = firebase.firestore.collection('PostHab');
        let query = PostHRef.where('title', '==', true).doc().get()
       .then(snapshotTi  => {
       if (snapshotTi.empty) {
     console.log('No matching value.');
     return;
   }  
   snapshot.forEach(doc => {
     console.log(doc.id, '=>', doc.data());
   });
 })
 .catch(err => {
   console.log('Error getting documents', err);
 });
   }
      


    render(){
        return(
           <div id='Test'>
               <Form>
               <Form.Row>

<Form.Group as={Col} controlId="formGridTypeHab" >
    <Form.Label value={this.state.departureDate}>Date Arrivée</Form.Label>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridVille" >
    <Form.Label value={this.state.departureDate}>Date Départ</Form.Label>
  </Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} controlId="formGridTypeHab" >
    <Form.Label value={this.state.departureDate}>Etat Final</Form.Label>
  </Form.Group>



  <Form.Group as={Col} controlId="formGridNbTrav" >
    <Form.Label value={this.state.totalPrice}>Total Price</Form.Label>
  </Form.Group>
  </Form.Row>

<Button onClick={this.TestSendData} onChange={this.handleChange} variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      
           </div>
        );
    }
}

export default Test;