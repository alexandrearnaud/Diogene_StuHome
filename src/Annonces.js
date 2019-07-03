import { Container, Card, Row, Col, Carousel, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostAnnonces from './PostAnnonces';
 


class Annonces extends Component{
    constructor(props) {
        super(props);
        this.state = {

          title:'',
          city:'',
          typehab:'',
          nbtrav:'',
          rankhost:'',
          price:'',
          selectRoom:'',
          selectBed:'',
          image: null,
          url: '',
       
        }
      }
    

    
    render(){
        return(
            <div id='FicheA'>
<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
        <div class="col-md-4">
       <img src="..." class="card-img" alt="..."/>
     </div>
     <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            
            </div>
        );
    }
}

export default Annonces;