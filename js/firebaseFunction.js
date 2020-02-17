"use strict";
var firebaseConfig = {
    apiKey: "AIzaSyDUpw1SBd2hm7arpboisjoLDlRJY8CE_UY",
    authDomain: "gmaing-match.firebaseapp.com",
    databaseURL: "https://gmaing-match.firebaseio.com",
    projectId: "gmaing-match",
    storageBucket: "gmaing-match.appspot.com",
    messagingSenderId: "408389194553",
    appId: "1:408389194553:web:6d30c2a496a7774ec50ee8"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
//---------------------------------------- sign up ----------------------------------------
function signUp(){
let email = document.querySelector('#mail').value;
let password = document.querySelector('#password').value;

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  db.collection("users").add({
  email: email
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
// ------------------------------  sign in  -------------------------------------------------
};
// function signIn(){
//   let email = document.querySelector('#inMail').value;
//   let password = document.querySelector('#inPassword').value;
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });email-password.html
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
//   });
// }