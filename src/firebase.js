import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_t-hh_WYvf0lj1xwIxpHiOlYMqYGPv9o",
  authDomain: "xflix-f2c29.firebaseapp.com",
  projectId: "xflix-f2c29",
  storageBucket: "xflix-f2c29.appspot.com",
  messagingSenderId: "355971715675",
  appId: "1:355971715675:web:44c3621059c72917e4657e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; 