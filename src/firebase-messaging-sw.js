importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDqDGW0FPvHU3vdv0PcZHOCxCG_XwkzSkI",
  authDomain: "arabic-a7eed.firebaseapp.com",
  projectId: "arabic-a7eed",
  storageBucket: "arabic-a7eed.appspot.com",
  messagingSenderId: "652838190408",
  appId: "1:652838190408:web:10f5ce476e6f108293c77d",
  measurementId: "G-VXPBPCME6C"
});

const messaging = firebase.messaging();