import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBbQUfttZndD677DdcWyX-_vIVmoKirUes",
    authDomain: "story-hub-40f47.firebaseapp.com",
    projectId: "story-hub-40f47",
    storageBucket: "story-hub-40f47.appspot.com",
    messagingSenderId: "364607764054",
    appId: "1:364607764054:web:93fe359951f8b70bc76df7"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()