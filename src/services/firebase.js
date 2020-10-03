import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7JGyAQ-a6GQss2uwbBlgh6A3NXXYKu-w",
    authDomain: "react-chat-ac9e7.firebaseapp.com",
    databaseURL: "https://react-chat-ac9e7.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database;