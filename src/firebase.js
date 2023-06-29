import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdehjOemVUndsVRH2GV1UPBuwmg-5tZ-E",
  authDomain: "the-tech-hub-org.firebaseapp.com",
  projectId: "the-tech-hub-org",
  storageBucket: "the-tech-hub-org.appspot.com",
  messagingSenderId: "1088439115951",
  appId: "1:1088439115951:web:5865b92b7fdfffb9d3345a",
  measurementId: "G-DZYY5NEZRL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;