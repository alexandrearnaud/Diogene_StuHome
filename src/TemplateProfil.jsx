import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import appart from './img/appart1.jpg';
import appart2 from './img/appart2.jpg';
import appart3 from './img/appart3.jpg';
import personne from './img/personne.jpg';
import { Container, Card, Row, Col, Carousel, Image } from 'react-bootstrap';
import { IoIosHome, IoIosMedal, IoLogoEuro, IoIosPhotos, IoIosPhoneLandscape, IoIosPhonePortrait, IoIosMail } from 'react-icons/io';


class TemplateProfil extends Component {
  render() {
    const CardStyle = {
        width: "10%", 
        height: "10%"
      }
    return (
      <div className="TemplateProfil">
          <h1> Jean-Christophe </h1>
          
                <Card.Body>
                <Card.Text>
                <Container>
                    <Row>
                        <Col style={{textAlign: "left"}} xs={8}>
                        <Image 
                        src={personne}
                        style={{height: "100%", width: "40%"}} roundedCircle />
                        </Col>

                        <Col xs={4}>
                         
                        </Col>
                        
                    </Row>

                    <br></br>
                    
                    <Row>
                        <Col xs={8}><IoIosHome/> 52 rue de l'église, 74000 Annecy </Col>
                    </Row>
                    <Row>
                        <Col xs={6}><IoIosPhonePortrait/> 06.06.06.04.58 </Col>
                    </Row>
                    <Row>
                        <Col xs={6}><IoIosMail/> jeanchrichri@hotmail.fr </Col>
                    </Row>

                    <br></br>

                    <Row>
                        <Col style={{textAlign: "center"}} xs={10}><IoIosMedal/> SuperHôte</Col>
                        <Col style={{textAlign: "justify"}} xs={10}><p> Les SuperHôtes sont des hôtes expérimentés qui bénéficient de très bonnes évaluations et qui s'engagent à offrir d'excellents séjours aux voyageurs. </p> </Col>
                    </Row>
                    
                    </Container>
                </Card.Text>
                </Card.Body>
            
            <br />
            
      </div>
    );
  }
}

export default TemplateProfil;
