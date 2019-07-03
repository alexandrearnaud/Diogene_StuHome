import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from './Header'
import Footer from './Footer'
import App from './App';
import QuiSommesNous from './QuiSommesNous';
import CGV from './CGV';
import MentionsLegales from './MentionsLegales';
import ContactezNous from './ContactezNous';
import Login from './Login';
import TemplateFiche from './TemplateFiche';
import TemplateProfil from './TemplateProfil';
import Inscription from './Inscription';
import Home from './Home';
import {firebase} from './Fire';
import Reservation from './Reservation';
import Administration from './Administration';
import Profil from './Profil';
import Navigation from './Navigation';
import PostAnnonces from './PostAnnonces';
//import Test from './TestsenData';
import Annonces from './Annonces';


const MainRouter = () => {
    const [user, setUser] = useState({authDone: false, isGuest: true, isAdmin: false});

    useEffect(() => firebase.auth().onAuthStateChanged(async authUser => {
    console.log(user);
    if(authUser != null) {
       
        const adminsnapshot = await firebase.firestore().collection('user').doc(authUser.uid).get().then[
            snapshot => {
                const userSnapshot = snapshot.data();
                if (snapshot.exists){
                    if (userSnapshot.status === 'Admin'){
                        setUser({
                            isEtudiant: true,
                            user: authUser,
                            isProprietaire: true,
                            isAdmin: true,
                            authDone: true,
                            isGuest: false,
                            email: authUser.email,
                            uid: authUser.uid
                            
                        });   
                    }else if(userSnapshot.status === 'Etudiant'){
                        setUser({
                            isEtudiant: true,
                            authDone: true,
                            isGuest: false,
                            user: authUser,
                            email: authUser.email,
                            uid: authUser.uid
                        });
                    }else if(userSnapshot.status === "Proprietaire"){
                            setUser({
                            isProprietaire: true,
                            authDone: true,
                            isGuest: false,
                            user: authUser,
                            email: authUser.email,
                            uid: authUser.uid
                        });
                    }else {
                        console.log('error');
                    } 
                }
                else {
                        setUser({
                        isGuest: true,
                        isAdmin: false,
                        isProprietaire: false,
                        authDone: false,
                        email : null,
                        uid: null,
                        });
                    
                }
            }
        ]
        return;
    }


    
}))

 return (
        <>
            <Navigation />
            <BrowserRouter>
                <Header user={user}/>
                <Container>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home {...props} user={user} />}/>
                        <Route exact path="/TemplateFiche" component={TemplateFiche}/>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path="/Inscription" component={Inscription}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/ContactezNous" component={ContactezNous}/>
                        <Route exact path="/PostAnnonces" component={PostAnnonces}/>
                        <Route exact path="/Annonces" component={Annonces}/>
                        <Route exact path="/Administration" component={Administration}/>
                        <Route exact path="/Reservation" component={Reservation}/> 
                        <Route exact path="/QuiSommesNous" component={QuiSommesNous}/>
                        <Route exact path="/CGV" component={CGV}/>
                        <Route exact path="/MentionsLegales" component={MentionsLegales}/>                
                        
                    </Switch>
                </Container>
                <Footer/>
            </BrowserRouter>
        </>
    );

} 


   


export default MainRouter; 