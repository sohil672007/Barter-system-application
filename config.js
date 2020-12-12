import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDKa721I-nexRNrG6ZA2eIT5UynKgrePjY",
    authDomain: "book-santa-app-5e6a3.firebaseapp.com",
    databaseURL: "https://book-santa-app-5e6a3.firebaseio.com",
    projectId: "book-santa-app-5e6a3",
    storageBucket: "book-santa-app-5e6a3.appspot.com",
    messagingSenderId: "614559544683",
    appId: "1:614559544683:web:e59cc71f08dcf30f7a882e",
    measurementId: "G-PLST990QB5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore();