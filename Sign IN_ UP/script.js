
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCcXsEQWYEr7ew3RzlYqzd4yQU-U3GhsNE",
//   authDomain: "loin-and-signup.firebaseapp.com",
//   projectId: "loin-and-signup",
//   storageBucket: "loin-and-signup.appspot.com",
//   messagingSenderId: "923294018924",
//   appId: "1:923294018924:web:15f7dd864a80c3509b1749",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // ***********************************//

// var registration_Div = document.getElementById("registration_div");
// var login_Div = document.getElementById("login_div");
// var bool = false;

// const log_link = document.getElementById("login_link");
// const reg_link = document.querySelector("#register_button");

// function jumpPage(e) {
//   if (bool) {
//     login_Div.style.display = "none";
//     registration_Div.style.display = "inline";
//     bool = false;
//   } else {
//     login_Div.style.display = "inline";
//     registration_Div.style.display = "none";
//     bool = true;
//   }
// }
// reg_link.addEventListener("click", jumpPage);
// log_link.addEventListener("click", jumpPage);
// document.getElementById("login_btn").addEventListener("click", function () {
//   const login_email = document.getElementById("login_email").value;
//   const login_password = document.getElementById("login_password").value;
//   console.log(login_email);
//   console.log(login_password);
//   if (login_email != "" && login_password != "") {
//     signInWithEmailAndPassword(auth, login_email, login_password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         // ...
//         document.getElementById("result_box").style.display = "inline";
//         login_Div.style.display = "none";
//         document.getElementById("result").innerHTML =
//           "welcome<br>" + login_email + " login Successfuly";
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         document.getElementById("result_box").style.display = "inline";
//         login_Div.style.display = "none";
//         document.getElementById("result").innerHTML =
//           "sorry!<br>" + errorMessage;
//       });
//   }
// });



