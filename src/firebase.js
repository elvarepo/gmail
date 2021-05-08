import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_cRmGthI_-zk2DPlJRx5rinxar29aB5I",
    authDomain: "clone-d421b.firebaseapp.com",
    projectId: "clone-d421b",
    storageBucket: "clone-d421b.appspot.com",
    messagingSenderId: "398833609093",
    appId: "1:398833609093:web:3675acde7ab891e4d4bcec"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};