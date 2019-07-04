import React, {Component} from 'react';
import { storage } from './Fire';
import { firebase } from './Fire';
import { Form, Col, Row, Button} from 'react-bootstrap';
import Select from 'react-select';
import db from './Fire';



const optionsBed = [ 
  { value : '1', label : '1'},
  { value : '2', label : '2'},
  { value : '3', label : '3'},
];

const optionsRoom = [ 
  { value : '1', label : '1'},
  { value : '2', label : '2'},
  { value : '3', label : '3'},
];








class PostAnnonces extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        /*this.handleUpload = this.handleUpload.bind(this);*/  
        this.writePostA = this.writePostA.bind(this);
        this.state = {

          title:'',
          city:'',
          typehab:'',
          nbtrav:'',
          rankhost:'',
          price:'',
          selectRoom:'',
          selectBed:'',
          author:'',
          image: null,
          url: '',

        }
    }

    handleChange(e) {
      this.setState ({ [e.target.name] : e.target.value });
    }

    handleChangeImg = e => {
      if(e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({image});
      }
    } 
    handleChangeRoom = selectRoom => {
      this.setState({ selectRoom });
      console.log(`Option selected:`, selectRoom);
    };

    handleChangeBed = selectBed => {
      this.setState({ selectBed });
      console.log(`Option selected:`, selectBed);
    };
  

    

    
   async writePostA(e) {
    e.preventDefault()
    const {image} = this.state;
    let docRef = firebase.firestore().collection('PostHab').doc();
    const imageRef = storage.ref().child(`images/${docRef.id}`);
    console.log('storing imqge');
    await imageRef.put(image);
    console.log('storing imqge done');
    const url = await imageRef.getDownloadURL()
   
    console.log('get url done')
    console.log(url);
    this.setState({ url })

    console.log('storing doc')

    await docRef.set({
      title: this.state.title,
      city: this.state.city,
      typehab: this.state.typehab,
      nbtrav: this.state.nbtrav,
      rankhost: this.state.rankhost,
      price: this.state.price,
      selectRoom: this.state.selectRoom,
      selectBed: this.state.selectBed,
      author:this.state.author,
      url: url,

    });
    console.log('storing doc done')
    alert('Annonce Postée');

    }
   

   
  render(){

    const { selectBed, selectRoom } = this.state;
   

    return (
      <div id="PostAnnonces">
        
        <Form>
          <Form.Row>

          <Form.Group as={Col} controlId="formGridTypeHab" >
              <Form.Label>Titre de l'annonce</Form.Label>
              <Form.Control type="Text" placeholder="Titre" onChange={this.handleChange} value={this.state.title} name="title"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridVille" >
              <Form.Label>Ville</Form.Label>
              <Form.Control type="Text" placeholder="Ville" onChange={this.handleChange} value={this.state.city} name="city"/>
            </Form.Group>

          <Form.Group as={Col} controlId="formGridTypeHab" >
              <Form.Label>Type Habitation</Form.Label>
              <Form.Control type="Text" placeholder="Type d'habitation" onChange={this.handleChange} value={this.state.typehab} name="typehab"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridVille" >
              <Form.Label>Auteur</Form.Label>
              <Form.Control type="Text" placeholder="Auteur" onChange={this.handleChange} value={this.state.author} name="author"/>
            </Form.Group>

          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridNbTrav" >
              <Form.Label>Nombres voyageurs</Form.Label>
              <Form.Control type="Text" placeholder="Nombre de voyageurs" onChange={this.handleChange} value={this.state.nbtrav} name="nbtrav"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNbRoom" >
            <Form.Label>Nombre Chambres</Form.Label>
            <Select 
            value={selectRoom}
            onChange={this.handleChangeRoom}
            options={optionsRoom}/>
           </Form.Group>

            <Form.Group as={Col} controlId="formGridNbBed" >
            <Form.Label>Nombre Lits</Form.Label>
            <Select 
            value={selectBed}
            onChange={this.handleChangeBed}
            options={optionsBed}/>
           </Form.Group>
            </Form.Row>
            
            <Form.Row>
            <Form.Group as={Col} controlId="formGridRankHost" >
                  <Form.Label>Rang Hote</Form.Label>
                  <Form.Control type="Label" onChange={this.handleChange} value={this.state.rankhost} name="rankhost"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPrice" >
                  <Form.Label>Prix</Form.Label>
                  <Form.Control type="Text" onChange={this.handleChange} value={this.state.price} name="price"/>
                </Form.Group>

                <Form.Group as={Col} controlId="FormImage">
                  <Form.Label>Images</Form.Label>
                  <Form.Control type="file" onChange={this.handleChangeImg}/>
                  </Form.Group>
                
            </Form.Row>

            <Button onClick={this.writePostA} onChange={this.handleChange} variant="primary" type="submit">
            Poster
          </Button>
      </Form>
      </div>

      
        
    );
  }
}

export default PostAnnonces;