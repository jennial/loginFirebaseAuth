import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBB0hUgsxYNnWiHslDkruDRZFeX5RJQkCs",
    authDomain: "basedeinformacoespuc.firebaseapp.com",
    projectId: "basedeinformacoespuc",
    storageBucket: "basedeinformacoespuc.firebasestorage.app",
    messagingSenderId: "997306372213",
    appId: "1:997306372213:web:59d061250412540467e83c",
    measurementId: "G-T1348HS888"
  };

  if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase; 