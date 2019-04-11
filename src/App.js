import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import annecy from './annecy.jpg';
import annecy2 from './annecy2.jpg';
import annecy3 from './annecy3.jpg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';


class App extends Component {
  render() {
    return (
      <div className="Home">
          <h1> Bienvenue sur notre site Stuhome </h1>
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
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    );
  }
}

export default App;
