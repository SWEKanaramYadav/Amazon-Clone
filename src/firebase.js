import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARHB3fzEVDqHxsITtssWhMXXhjht-7N94",
    authDomain: "clone-6cd1f.firebaseapp.com",
    databaseURL: "https://clone-6cd1f.firebaseio.com",
    projectId: "clone-6cd1f",
    storageBucket: "clone-6cd1f.appspot.com",
    messagingSenderId: "976194958616",
    appId: "1:976194958616:web:e7fc1f08cb020c0cffda6d",
    measurementId: "G-RYYKGC6Y5W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
