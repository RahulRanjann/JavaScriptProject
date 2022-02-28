
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"
  


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCcXsEQWYEr7ew3RzlYqzd4yQU-U3GhsNE",
    authDomain: "loin-and-signup.firebaseapp.com",
    projectId: "loin-and-signup",
    storageBucket: "loin-and-signup.appspot.com",
    messagingSenderId: "923294018924",
    appId: "1:923294018924:web:15f7dd864a80c3509b1749"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

    // ***********************************//

var registration_Div = document.getElementById("registration_div");
var login_Div = document.getElementById("login_div");
var bool = null;
function jumpPage(e) {
  if (bool) {
    login_Div.style.display = "none";
    registration_Div.style.display = "inline";
    bool = false;
  } else {
    login_Div.style.display = "inline";
    registration_Div.style.display = "none";
    bool = true;
  }
}


document.getElementById("login").addEventListener('click',function(){
   const login_email = document.getElementById("login_email").value;
   const login_password = document.getElementById("login_password").value;


   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


});