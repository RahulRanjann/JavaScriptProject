// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_LKbmd4OD650PN9OkO5Fkql4EiIuzY4",
  authDomain: "signup-and-signin-d25c2.firebaseapp.com",
  projectId: "signup-and-signin-d25c2",
  storageBucket: "signup-and-signin-d25c2.appspot.com",
  messagingSenderId: "156350853031",
  appId: "1:156350853031:web:b510f731009dd8e5a3d082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutBtn = document.querySelector("#logout-button");
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector("#preloader").style.visibility = "hidden";
    console.log("Logged in");
  } else {
    window.location.href = "index.html";
  }
});

logoutBtn.onclick = function () {
  signOut(auth);
};
