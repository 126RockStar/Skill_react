import firebase from 'firebase'
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyBr0Rq4Mhxi1PaLngxVlUa6cHkcNc_lcHg",
    authDomain: "dentalconciergeportal.firebaseapp.com",
    databaseURL: "https://dentalconciergeportal.firebaseio.com",
    projectId: "dentalconciergeportal",
    storageBucket: "dentalconciergeportal.appspot.com",
    messagingSenderId: "1028376226556",
    appId: "1:1028376226556:web:72d96775289c62affb8579"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

export {
    storage, firebase as default
}