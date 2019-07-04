import { firebase } from './Fire';
// import { useState, useEffect } from 'react';
// import { storage } from './Fire';
import { Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { IoIosHome, IoIosMedal, IoLogoEuro, IoIosPhotos } from 'react-icons/io';
import { Container, Card, Carousel, Image } from 'react-bootstrap';


/* Variables de l'annonce*/





class FicheAnnonces extends React.Component {

  constructor(props) {
    super(props);
    this.retriveDataA = this.retriveDataA.bind(this);
    this.state = {

      title: '',
      city: '',
      typehab: '',
      nbtravprice: '',
      rankhost: '',
      selectRoom: '',
      selectBed: '',
      url: '',
      image: null,

    }
  }

  componentDidMount() {
    console.log('will mount');
      this.retriveDataA();
  }

  retriveDataA() {
    // e.preventDefault();
    let PostHRef = firebase.firestore().collection('PostHab').doc(this.props.match.params.ficheid);
    let query = PostHRef.get()
      .then(doc => {
        if (!doc) {
          console.log('No matching value.');
          return;
        }
          console.log(doc.id, '=>', doc.data());
          // this.setState(doc.data());
          this.setState({
            title: (doc.data().title),
            city: (doc.data().city),
            typehab: (doc.data().typehab),
            nbtrav: (doc.data().nbtrav),
            price: (doc.data().price),
            rankhost: (doc.data().rankhost),
            selectRoom: (doc.data().selectRoom),
            selectBed: (doc.data().selectBed),
            url: (doc.data().url),
          })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }






  render() {
    console.log('props:', this.props);
    const { title, city, typehab, nbtrav, price, rankhost, selectRoom, selectBed, author, url } = this.state;
    console.log('state:', this.state);

    const LinkStyle = {
      color: 'white',
      textDecoration: 'none',
    }
    return (
      <div className="FicheA">
        <Card className="CardStyle">

          <img
            className="d-block w-100"
            src={url}
            style={{ width: "100%", height: "100%" }}
            alt="First slide"
          />



          <Card.Body>
            <Card.Text>
              <Container>
                <Row>
                  <Col xs={6} ><h1>{title}</h1></Col>
                  <Col xs={3}> <IoIosMedal /> {rankhost} </Col>
                  <Col xs={3}> <IoLogoEuro /> <strong> Prix : </strong>  {price}€ / nuit</Col>
                </Row>
                <Row>
                  <Col xs={6}><p>{city}</p> </Col>
                  <Col xs={5}> </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col xs={6}><IoIosHome /> {typehab} </Col>
                  <Col xs={4}></Col>
                  <Col xs={2} style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}> <a href="../TemplateProfil"><Image
                    src={'https://firebasestorage.googleapis.com/v0/b/diogenestuhome.appspot.com/o/images%2F328249.jpg?alt=media&token=732729ff-5b94-4943-9fe5-6635d5d22aed'}
                    style={{ height: "100%", width: "40%" }} roundedCircle
                  /></a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}><p> {nbtrav} voyageurs - {selectRoom.value} chambres - {selectBed.value} lits </p> </Col>
                  <Col xs={4}></Col>
                  <Col style={{ textAlign: "center" }}> {author} </Col>
                </Row>
                <Row>
                  <Col xs={6}><p> <IoIosMedal /> {author} est un Hôte de rang {rankhost} </p> </Col>
                  <Col xs={5}></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col xs={6}><p> Les SuperHôtes sont des hôtes expérimentés qui bénéficient de très bonnes évaluations et qui s'engagent à offrir d'excellents séjours aux voyageurs. </p> </Col>
                  <Col xs={5}></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Button>
                    <Link to="/Reservation" style={LinkStyle}> Reserver </Link>
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