import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import annecy from './img/annecy.jpg';
import annecy2 from './img/annecy2.jpg';
import annecy3 from './img/annecy3.jpg';
import { Form, Col, Row, Button} from 'react-bootstrap';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import firebase from './Fire';




class Home extends Component {
    constructor(props){
        super(props)
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        firebase.auth().signOut();
    }


    render() {
         return(
            <div className="Home">
            <h1> Bienvenue sur notre site Stuhome </h1>
            <div style={{width: "100%"}}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={annecy}
                    style={{width: "100%", height: "100%"}}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>La ville d'Annecy</h3>
                    <p>Annecy - La vieille ville et le Thiou</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={annecy2}
                    style={{width: "100%", height: "100%"}}
                    alt="Second slide"
                  />
  
                  <Carousel.Caption>
                    <h3>Encore la ville d'Annecy</h3>
                    <p>Talloires-Montmin - Baie de Talloires</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={annecy3}
                    style={{width: "100%", height: "100%"}}
                    alt="Third slide"
                  />
  
                  <Carousel.Caption>
                    <h3>Toujours la ville d'Annecy</h3>
                    <p>Des beaux bâtiments</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>
            
           
            
            
        </div>
         );
    }
   

}
 export default Home;