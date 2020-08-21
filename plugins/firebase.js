import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC6h1NziWg3vXHurmvzaQOfaS0s45a1ob8",
    authDomain: "better-future-app.firebaseapp.com",
    databaseURL: "https://better-future-app.firebaseio.com",
    projectId: "better-future-app",
    storageBucket: "better-future-app.appspot.com",
    messagingSenderId: "505959582940",
    appId: "1:505959582940:web:3acb59a663680903b3b819",
    measurementId: "G-NTYRRWCG6F"
};

var app = null;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}