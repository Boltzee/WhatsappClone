import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMeUokOAA94Eh1ll7C_KmicP6yuwO4Z8Q",
    authDomain: "whatsapp-codfish.firebaseapp.com",
    projectId: "whatsapp-codfish",
    storageBucket: "whatsapp-codfish.appspot.com",
    messagingSenderId: "416030160497",
    appId: "1:416030160497:web:d6fa8fbd4c888b2b6b8dd0",
    measurementId: "G-VX3XZB4Y0J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()l
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;
