import { firebase } from './Fire';
import { storage } from './Fire';
import React, { Component } from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import Select from 'react-select';


class FicheAnnonce extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.retriveData = this.retriveData.bind(this);
        this.state = {

          title:'',
          city:'',
          typehab:'',
          price:'',
          NbRoom:'',
          NbBed:'',
          image: null,
          url: '',

        }
        
    }

    retriveData(e){
         e.preventDefault();
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
        return (
            <div className="FicheA">
                <Card className="CardStyle">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={appart}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={appart2}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={appart3}
                  style={{width: "100%", height: "100%"}}
                  alt="First slide"
                />
                </Carousel.Item>
                
            </Carousel>
                <Card.Body>
                <Card.Text>
                <Container>
                    <Row>
                        <Col xs={6}><h1> Appart n°1 </h1></Col>
                        <Col xs={3}> <IoIosMedal/> SuperHôte</Col>
                        <Col xs={3}> <IoLogoEuro/> <strong> Prix : </strong>  {}€ / nuit</Col>
                    </Row>
                    <Row>
                        <Col xs={6}><p>Annecy</p> </Col>
                        <Col xs={5}> </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs={6}><IoIosHome/> Loft entier </Col>
                        <Col xs={4}></Col>
                        <Col xs={2} style={{
    justifyContent: 'center',
    alignItems: 'center'}}> <a href="../TemplateProfil"><Image 
                        src={personne}
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
                    </Container>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        )
    }


}

export default FicheAnnonces;