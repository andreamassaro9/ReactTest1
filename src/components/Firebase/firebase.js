import app from 'firebase/app';
import 'firebase/auth';

const config = {
    // Initialize Firebase
    apiKey: "AIzaSyD1armgVOWBg4o0lSt5jRpDfDHK3nIJJ5c",
    authDomain: "esercitazione-f57e2.firebaseapp.com",
    databaseURL: "https://esercitazione-f57e2.firebaseio.com",
    projectId: "esercitazione-f57e2",
    storageBucket: "esercitazione-f57e2.appspot.com",
    messagingSenderId: "945238000777"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password) =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;