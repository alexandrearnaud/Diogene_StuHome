import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Col, Row, Button} from 'react-bootstrap';
import { firebase } from './Fire';
import { storage } from './Fire';

import Select from 'react-select';



  const options = [ 
    { value : 'France', label : 'France'},
    { value : 'Italie', label : 'Italie'},
    { value : 'Espagne', label : 'Espagne'},
  ];

  const options2 = [ 
    { value : 'Prop', label : 'Propriétaire'},
    { value : 'Etudiant', label : 'Etudiant'},
  ];

class Inscription extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      username: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      telephone: '',
      type: '',
      zipCode: '',
      city: '', 
      country: '',
      selectedStatus: '',
      selectedOption : '',
     
    }
  }

  handleChange(e) {
    this.setState ({ [e.target.name] : e.target.value });
  }

 
  
  handleChangeCountry= selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleChangeStatus= selectedStatus => {
    this.setState({ selectedStatus });
    console.log(`Option selected:`, selectedStatus);
  }

  
  

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state);
  }

  signUp(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
      if(result){ 
        var newUser = {};
        newUser.firstname = this.state.firstname;
        newUser.lastname = this.state.lastname;
        newUser.email = this.state.email;
        newUser.password = this.state.password;
        newUser.username = this.state.username;
        newUser.dateOfBirth = this.state.dateOfBirth;
        newUser.gender = this.state.gender;
        newUser.address = this.state.address;
        newUser.telephone = this.state.telephone;
        newUser.type = this.state.type;
        newUser.zipCode = this.state.zipCode;
        newUser.city = this.state.city;
        newUser.country = this.state.selectedOption;
        newUser.status = this.state.selectedStatus;
        
        console.log(result)
        alert("Inscription terminée");
        firebase.firestore().collection("user").doc(result.user.uid).set(newUser).catch(function (error){
          console.error("Error adding document: ", error);
        });
      }
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/weak-password') {
        alert('Password is False');
      } else {
       alert(errorMessage);
      }  
    });
  }
 
  render() {

    const { selectedOption, selectedStatus } = this.state;
    

return (
          
    <div id="Ins">
        <h1> Inscription </h1>
        <br/>
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

                <Form.Group as={Col} controlId="formGridDate" >
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" onChange={this.handleChange} value={this.state.dateOfBirth} name="dateOfBirth"/>

                </Form.Group>
            </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" onChange={this.handleChange} value={this.state.email} name="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername" >
              <Form.Label>Nom Utilisateur</Form.Label>
              <Form.Control type="Text" placeholder="Nom Utilisateur"  onChange={this.handleChange} value={this.state.username} name="username"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" >
              <Form.Label>Mot de Passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de Passe"  onChange={this.handleChange} value={this.state.password} name="password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress" >
            <Form.Label>Adresse</Form.Label>
            <Form.Control type='Text' placeholder='' onChange={this.handleChange} value={this.state.address} name='address'/>
          </Form.Group>
          
          <Form.Row>
          <Form.Group as={Col} controlId="formGridCountry" >
            <Form.Label>Status</Form.Label>
            <Select 
            value={selectedStatus}
            onChange={this.handleChangeStatus}
            options={options2}/>
           </Form.Group>

           <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Adresse 2</Form.Label>
            <Form.Control type='Text' placeholder="Appartement, Rue, Etage" onChange={this.handleChange} name='adress2'/>
          </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity" >
              <Form.Label>Ville</Form.Label>
              <Form.Control  type='Text' onChange={this.handleChange} value={this.state.city} name='city' />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip" >
              <Form.Label>Code Postal</Form.Label>
              <Form.Control  type='Text' onChange={this.handleChange} value={this.state.zipCode} name='zipCode' />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridCountry" >
            <Form.Label>Pays</Form.Label>
            <Select 
            value={selectedOption}
            onChange={this.handleChangeCountry}
            options={options}/>
           </Form.Group>
          
            </Form.Row>

          <Form.Group id="formGridCheckbox">
                <Form.Check/>
                <Form.Label> J'accepte les Conditions Générales de Ventes  du site StuHome com</Form.Label>
             
          </Form.Group>
          
      


          <Button onClick={this.signUp} onChange={this.handleChange} variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
    );
  }
 };



  
export default Inscription;