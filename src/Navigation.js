import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Col, Row, Button} from 'react-bootstrap';
import firebase from './Fire';

const Navigation = (props) =>{
    
    /*async function signout(event){
        console.log("Deconnectez vous");
        event.preventDefault();
        await firebasebase.auth().signOut().then(function() {
            console.log("Deconnction");
        }, function(error){
            console.error('Erreur pendant la deconnection', error);
        });
        document.location.href = '/';
    }
    

    function toProfil(){
        console.log('to profile');
        document.location.href = '/profil/${props.user.uid}';
    }*/
    
    return(
        <div id ="nav">
        </div>
    )

}

export default Navigation;