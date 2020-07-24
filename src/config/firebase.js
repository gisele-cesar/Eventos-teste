import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxI1SjawwuT9htNdXoCpurt1NUjvhFYDc",
    authDomain: "eventos-79f22.firebaseapp.com",
    databaseURL: "https://eventos-79f22.firebaseio.com",
    projectId: "eventos-79f22",
    storageBucket: "eventos-79f22.appspot.com",
    messagingSenderId: "359541390004",
    appId: "1:359541390004:web:12f26cc949a142f1b6f5e1"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);