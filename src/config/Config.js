import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBkOUx-42x6MJBk9cxJq4H5j7C81b-b8l4",
    authDomain: "ecommerce-firebase-b96df.firebaseapp.com",
    projectId: "ecommerce-firebase-b96df",
    storageBucket: "ecommerce-firebase-b96df.appspot.com",
    messagingSenderId: "26224335615",
    appId: "1:26224335615:web:e3a82e69e0c54661e10aca",
    measurementId: "G-B3JMB2CJ9H"
  };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();
    export {auth, db, storage};