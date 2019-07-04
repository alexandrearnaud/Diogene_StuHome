import React, { Component } from 'react';
import { firebase } from './Fire';
import { Form, Col, Row, Button} from 'react-bootstrap';
import Select from 'react-select';

const paymentOptions = [ 
    { value : 'CB', label : 'Credit Card'},
    { value : 'PayPal', label : 'PayPal'},
    { value : 'Crypto', label : 'Bitcoin'},
  ];

class Reservation extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {

          lastname:'',
          firstname:'',
          arrivaldate:'',
          departuredate:'',
          selectOpt:'',
         
        }
    }

    handleChange(e) {
        this.setState ({ [e.target.name] : e.target.value });
      }

      handleChangeOpt = selectOpt => {
        this.setState({ selectOpt });
        console.log(`Option selected:`, selectOpt);
      };

      async writeResa(e) {
        e.preventDefault()
        let docRef = firebase.firestore().collection('Res').doc();
        await docRef.set({

            lastname: this.state.lastname,
            firstname: this.state.firstname,
            arrivaldate: this.state.arrivaldate,
            departuredate: this.state.departuredate,
            selectOpt: this.state.selectOpt,
          
        });
        console.log('storing doc done')
    
        }

    render(){

        const { selectOpt } = this.state;

        return(
            <div id='Resa'>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridlastname" >
              <Form.Label>Nom</Form.Label>
              <Form.Control type="Text" placeholder="Nom" onChange={this.handleChange} value={this.state.lastname} name="lastname"/>
            </Form.Group>

                <Form.Group as={Col} controlId="formGridfirtsname" >
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="Text" onChange={this.handleChange} placeholder="Prenom" value={this.state.firstname} name="firstname"/>
                </Form.Group>
               
            </Form.Row>

            <Form.Row>
                 <Form.Group as={Col} controlId="formGridDate" >
                  <Form.Label>Date d'arrivée</Form.Label>
                  <Form.Control type="date" onChange={this.handleChange} value={this.state.dateOfBirth} name="arrivaldate"/>
                 </Form.Group>

                 <Form.Group as={Col} controlId="formGridDate" >
                  <Form.Label>Date de départ</Form.Label>
                  <Form.Control type="date" onChange={this.handleChange} value={this.state.dateOfBirth} name="departuredate"/>
                 </Form.Group>

           <Form.Group as={Col} controlId="formGridNbBed" >
            <Form.Label>Moyens de Payements</Form.Label>
            <Select 
            value={selectOpt}
            onChange={this.handleChangeOpt}
            options={paymentOptions}/>
           </Form.Group>
            </Form.Row>

            <Button onClick={this.writeResa} onChange={this.handleChange} variant="primary" type="submit">
            Finaliser
           </Button>

            </Form>
            </div>
        );
    }
}

export default Reservation;