function switchForm(formId) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById(formId).style.display = "block";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Please fill in all fields!");
  } else {
    alert("Login successful! (Demo only)");
  }
}

function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;

  if (user === "" || pass === "") {
    alert("Please fill in all fields!");
  } else if (pass.length < 6) {
    alert("Password must be at least 6 characters!");
  } else {
    alert("Register successful! (Demo only)");
    switchForm("loginForm");
  }
}
