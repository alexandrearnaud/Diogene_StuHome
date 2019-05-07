import firebase from 'Firebase';

const config = {
    apiKey: "AIzaSyDxiFyHEDmCNzgaY6_sbxwCXhlhi8ih6E4",
    authDomain: "diogenestuhome.firebaseapp.com",
    databaseURL: "https://diogenestuhome.firebaseio.com",
    projectId: "diogenestuhome",
    storageBucket: "diogenestuhome.appspot.com",
    messagingSenderId: "489150535842",
    appId: "1:489150535842:web:e1ff751882d5b991"
  };
  const fire = firebase.initializeApp(config);
  export default fire;