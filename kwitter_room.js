
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQyFj01gchCsjXTxX9q97pLW10ENSm2E",
  authDomain: "kwitter-8755b.firebaseapp.com",
  projectId: "kwitter-8755b",
  storageBucket: "kwitter-8755b.appspot.com",
  messagingSenderId: "306192571901",
  appId: "1:306192571901:web:2da07880ecbbc213dbcd94"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
