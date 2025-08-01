  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCHyjsIpnMt232LW3SUhvDQvIDBqxP4NwY",
    authDomain: "demos-d48f8.firebaseapp.com",
    projectId: "demos-d48f8",
    storageBucket: "demos-d48f8.firebasestorage.app",
    messagingSenderId: "649799427195",
    appId: "1:649799427195:web:a2bdb381aca9230a1e2ede",
    measurementId: "G-5C550TNC3V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
//   const analytics = getAnalytics(app);

const regButton = document.getElementById('regButton')

// register function
function registerUser(){
    const emailInput = document.getElementById('regEmailInput');
    const passwordInput = document.getElementById('regPasswordInput');

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log("email:", email)
    console.log("password:", password)

}

const Register = () => regButton.addEventListener('click', registerUser)
Register();


// login function

// logout function