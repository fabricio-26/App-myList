import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDzm3iLBPALAOHqeWIFQP8iMuIHAAmerEw",
    authDomain: "tarefas-4e893.firebaseapp.com",
    projectId: "tarefas-4e893",
    storageBucket: "tarefas-4e893.appspot.com",
    messagingSenderId: "85269998557",
    appId: "1:85269998557:web:0ac2e561b585d2d8196434"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;