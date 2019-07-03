import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import appart from './img/appart1.jpg';
import appart2 from './img/appart2.jpg';
import appart3 from './img/appart3.jpg';
import personne from './img/personne.jpg';
import { Container, Card, Row, Col, Carousel, Image } from 'react-bootstrap';
import { IoIosHome, IoIosMedal, IoLogoEuro, IoIosPhotos } from 'react-icons/io';


class TemplateFiche extends Component {
  render() {
    const CardStyle = {
        width: "20%", 
        height: "20%"
      }
    return (
      <div className="TemplateFiche">
          <h1> Template fiche </h1>
          <>
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
                        <Col xs={3}> <IoLogoEuro/> <strong> Prix : </strong>  45€ / nuit</Col>
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
            <br />
            </>
      </div>
    );
  }
}

export default TemplateFiche;
