import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMq0qXB08BAw1QQdze4LCLSIIYZwe64YQ',
  authDomain: 'slack-clone-d2c93.firebaseapp.com',
  projectId: 'slack-clone-d2c93',
  storageBucket: 'slack-clone-d2c93.appspot.com',
  messagingSenderId: '125106946195',
  appId: '1:125106946195:web:f721c7d9e5c12d31a0cd66',
  measurementId: 'G-E1RLX9ZHLK',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
