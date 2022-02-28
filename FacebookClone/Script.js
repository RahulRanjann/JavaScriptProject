const firebaseConfig = {
  apiKey: "AIzaSyA53dkcIkOWqxC6gW_zgwDaEQmn1CnuntA",
  authDomain: "my-application-86ecd.firebaseapp.com",
  databaseURL:
    "https://my-application-86ecd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-application-86ecd",
  storageBucket: "my-application-86ecd.appspot.com",
  messagingSenderId: "835062311323",
  appId: "1:835062311323:web:4ab87a721c7577687a593e",
  measurementId: "G-SQ1LR2LM96",
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//     document.getElementById("container").style.display = "block";
//     document.getElementById("AfterLogin").style.display = "none";
//   } else {
//     // User is signed out
//     // ...

//     document.getElementById("container").style.display = "none";
//     document.getElementById("AfterLogin").style.display = "block";
//   }
// });
document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();

  var UserEmail = document.getElementById("email_field").value;
  var UserPass = document.getElementById("password_field").value;
  signInWithEmailAndPassword(auth, UserEmail, UserPass)
    .then(function (UserCredential) {
      console.log(UserCredential.user);
      document.getElementById("container").style.display = "none";
      document.getElementById("AfterLogin").style.display = "block";
    })
    .catch(function (err) {
      if (err.code === "auth/wrong-password") {
        console.log("Wrong Email/Password");
      } else if (err.code === "auth/user-not-found") {
        console.log("User Not Found...");
      }
    });
});
