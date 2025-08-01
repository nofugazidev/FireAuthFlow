import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHyjsIpnMt232LW3SUhvDQvIDBqxP4NwY",
  authDomain: "demos-d48f8.firebaseapp.com",
  projectId: "demos-d48f8",
  storageBucket: "demos-d48f8.firebasestorage.app",
  messagingSenderId: "649799427195",
  appId: "1:649799427195:web:a2bdb381aca9230a1e2ede",
  measurementId: "G-5C550TNC3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//   const analytics = getAnalytics(app);

// register function
function registerUser() {
  const emailInput = document.getElementById("regEmailInput");
  const passwordInput = document.getElementById("regPasswordInput");

  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
      console.warn(error.message);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const registrationButton = document.getElementById("regButton");

  if (registrationButton) {
    const Register = () =>
      registrationButton.addEventListener("click", registerUser);
    Register();
  } else {
    console.warn("warning: html button element not found");
  }
});

// login function
function loginUser() {
  const emailInput = document.getElementById("logEmailInput");
  const passwordInput = document.getElementById("logPasswordInput");

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      window.location.href = "index.html";
    })
    .catch((error) => {
      //   alert(error.message);
      alert("wrong password or email");
      console.warn(error.message);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");

  if (loginButton) {
    const Login = () => loginButton.addEventListener("click", loginUser);
    Login();
  } else {
    console.warn("warning: html button element not found");
  }
});

// logout function
function LogoutUser() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const logOutButton = document.getElementById("logOutButton");

  if (logOutButton) {
    const LogOut = () => logOutButton.addEventListener("click", LogoutUser);
    LogOut();
  } else {
    console.warn("warning: html button element not found");
  }
});
