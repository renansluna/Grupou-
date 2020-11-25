import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqEemyqatRa1zi_83dH25lRsW5N6Ud9LA",
    authDomain: "grupou-35708.firebaseapp.com",
    databaseURL: "https://grupou-35708.firebaseio.com",
    projectId: "grupou-35708",
    storageBucket: "grupou-35708.appspot.com",
    messagingSenderId: "36930726286",
    appId: "1:36930726286:web:75eb757a1be03876555cdf"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}