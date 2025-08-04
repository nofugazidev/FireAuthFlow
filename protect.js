function requireAuth() {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "login.html";
  }
}
