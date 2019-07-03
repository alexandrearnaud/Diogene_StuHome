import { firebase } from './Fire';
import { useState, useEffect } from 'react';
import { storage } from './Fire';
import React, { Component } from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import { IoIosHome, IoIosMedal, IoLogoEuro, IoIosPhotos } from 'react-icons/io';
import { Container, Card, Carousel, Image } from 'react-bootstrap';
import Select from 'react-select';

/* Variables de l'annonce*/




    
class FicheAnnonces extends React.Component{

    constructor(props){
        super(props);
        this.retriveData = this.retriveData.bind(this);
        this.state = {

          title:'',
          city:'',
          typehab:'',
          nbtravprice:'',
          rankhost:'',
          selectRoom:'',
          selectBed:'',
          url:'',
          image: null,

        }
        

           
    }
  
    retriveData(e){
         e.preventDefault();
         let PostHRef = firebase.firestore.collection('PostHab').where('title', '==', 'Las Noches' );
         let query = PostHRef.get()
        .then(snapshot  => {
        if (snapshot.empty) {
      console.log('No matching value.');
      return;
    }  
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      const title = (doc.data().title);
      const city = (doc.data().city);
      const typehab = (doc.data().typehab);
      const nbtrav = (doc.data().nbtrav);
      const price = (doc.data().price);
      const rankhost = (doc.data().rankhost);
      const selectRoom = (doc.data().selectRoom);
      const selectBed = (doc.data().selectBed);
      const url = (doc.data().url);
      this.setState({
        title,
      })
    }); 
  
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
    }
   



    render(){
        return (
            <div className="FicheA">
                <Card className="CardStyle">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={'https://firebasestorage.googleapis.com/v0/b/diogenestuhome.appspot.com/o/images%2Fdragon-age-inquisition-17012014-092315-002.jpg?alt=media&token=6053c2e1-94dd-4fbb-8cff-78df60d5c39e'}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={'https://firebasestorage.googleapis.com/v0/b/diogenestuhome.appspot.com/o/images%2Fchernobyl_wolves-wallpaper-1680x1050.jpg?alt=media&token=73ca89cc-df4c-4be2-a2e7-a6a9a80ca84b'}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={'https://firebasestorage.googleapis.com/v0/b/diogenestuhome.appspot.com/o/images%2F005b1ff6515380a1a5b1.jpeg?alt=media&token=36e777ef-31c9-4363-9004-af57469f95a8'}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>
                
            </Carousel>
                <Card.Body>
                <Card.Text>
                <Container>
                    <Row>
                        <Col xs={6} ><h1 onChange={this.retriveData} ></h1></Col>
                        <Col xs={3}> <IoIosMedal/> SuperHôte</Col>
                        <Col xs={3}> <IoLogoEuro/> <strong> Prix : </strong>  {}€ / nuit</Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p>{this.state.city}</p> </Col>
                        <Col xs={5}> </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs={6}><IoIosHome/> Loft entier </Col>
                        <Col xs={4}></Col>
                        <Col xs={2} style={{
    justifyContent: 'center',
    alignItems: 'center'}}> <a href="../TemplateProfil"><Image 
                        src={'https://firebasestorage.googleapis.com/v0/b/diogenestuhome.appspot.com/o/images%2Fc1mfMLODriBAcu8a8btO?alt=media&token=765f3f02-cdf5-40d6-9b17-ca7f7d6dcac2'}
                        style={{height: "100%", width: "40%"}} roundedCircle
                        /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p> 11 voyageurs - 4 chambres - 9 lits - 3 salles de bain</p> </Col>
                        <Col xs={4}></Col>
                        <Col style={{textAlign: "center"}}> Jean-Christophe</Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p> <IoIosMedal/> Frank est un SuperHôte </p> </Col>
                        <Col xs={5}></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p> Les SuperHôtes sont des hôtes expérimentés qui bénéficient de très bonnes évaluations et qui s'engagent à offrir d'excellents séjours aux voyageurs. </p> </Col>
                        <Col xs={5}></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                    <Button Link to="/Reservation" variant="primary" type="link">
                    Reserver
                   </Button>
                    </Row>
                    </Container>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        )
    }


}

export default FicheAnnonces;