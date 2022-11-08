import firebase from 'firebase';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDnwsteWzK8Xsx1vBxvMwXOAxELgTdMLLg",
    authDomain: "meuapp-15890.firebaseapp.com",
    databaseURL: "https://meuapp-15890-default-rtdb.firebaseio.com",
    projectId: "meuapp-15890",
    storageBucket: "meuapp-15890.appspot.com",
    messagingSenderId: "29202592791",
    appId: "1:29202592791:web:6d981f153b2e0505dbd852",
    measurementId: "G-31EWCEJZ9P"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase