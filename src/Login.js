import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Form, Col, Row, Button} from 'react-bootstrap';
// import firebase from './firebase-app';
//import 'firebase/auth';
import firebase from './config/firebase';
/*
async function doSignIn() {
  try {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: `${window.location.protocol}//${window.location.host}/finishsignin?redirect=${location.pathname}`,
      // This must be true.
      handleCodeInApp: true
    };

    await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    console.log('Storing email:', email);
    window.localStorage.setItem('emailForSignIn', email);
    console.log('Stored value:', window.localStorage.getItem('emailForSignIn'));
  } catch (error) {
    console.error(error);
  }
}*/

/*const user = () => {
  const [email, setEmail] = userState(null);
  const [password, setPassword] = userState(null);

  function handleEmailChanged(event) { setEmail(event.target.value);}
  function handlePasswordChanged(event) { setPassword(event.target.value);}
}*/


class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:''
    };
  };

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="Login">
      <h1> Connectez-vous à votre compte </h1>

     



      <br/>
        <Form>
          {/* Adresse Mail  */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          {/* Mot de passe  */}
          <Form.Group as={Row} controlId="formHorizontalNom">
            <Form.Label column sm={2}>
              Mot de passe
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Mot de passe" />
            </Col>
          </Form.Group>
          
          <div>
            <Form.Group as={Row}>
              <Col sm={{ span: 2, offset: 2 }}>
                <Button type="submit"> Se connecter </Button>
                
              </Col>
              <Col sm={{ span: 4}}>
                <Button onclick="window.location.href='www.google.fr'"> Mot de passe oublié </Button>
              </Col>
            </Form.Group>
          </div>
    
        </Form>
      </div>
    );
  }
}



/*
db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
*/
export default Login;
