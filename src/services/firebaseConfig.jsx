import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAr5AByIzzx6lzKJKyJIR3WM46B4TmmP3s",
  authDomain: "platpizza-c768b.firebaseapp.com",
  projectId: "platpizza-c768b",
  storageBucket: "platpizza-c768b.appspot.com",
  messagingSenderId: "180836310044",
  appId: "1:180836310044:web:acc47f341b06b8710193d9"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }