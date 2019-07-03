import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';



const config = {
    apiKey: "AIzaSyDxiFyHEDmCNzgaY6_sbxwCXhlhi8ih6E4",
    authDomain: "diogenestuhome.firebaseapp.com",
    databaseURL: "https://diogenestuhome.firebaseio.com",
    projectId: "diogenestuhome",
    storageBucket: "diogenestuhome.appspot.com",
    messagingSenderId: "489150535842",
    appId: "1:489150535842:web:e1ff751882d5b991"
  };

 firebase.initializeApp(config);
var database = firebase.database();

const storage = firebase.storage();

const admin = require('firebase-admin');

 
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

const settings = {timestampsInSnapshots: true};
db.settings(settings);


 

export { 
  storage, firebase, database as default 
};