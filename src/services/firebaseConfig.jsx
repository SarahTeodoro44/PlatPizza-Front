import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUMEY33hvqqqNy6eynn-P94YD3YJXI3ic",
  authDomain: "platpizza-3b5ad.firebaseapp.com",
  projectId: "platpizza-3b5ad",
  storageBucket: "platpizza-3b5ad.appspot.com",
  messagingSenderId:"924217850389",
  appId: "1:924217850389:web:f12b191b13b77092d82c1c"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth}