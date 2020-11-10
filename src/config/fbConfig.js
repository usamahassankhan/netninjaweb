import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyABlXqCu7Z6LlWvMu-29mqHHLEUaorIcc8",
    authDomain: "marioplan-aa3f9.firebaseapp.com",
    databaseURL: "https://marioplan-aa3f9.firebaseio.com",
    projectId: "marioplan-aa3f9",
    storageBucket: "marioplan-aa3f9.appspot.com",
    messagingSenderId: "766916944730",
    appId: "1:766916944730:web:936ceb4e6c7e84cdb80963",
    measurementId: "G-BV9LX9ETF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;
