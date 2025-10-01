//------------------------------------------
// khai báo các HTML element cần sử dụng
const switch_signin_btn = document.getElementById("signin-btn");
const switch_signup_btn = document.getElementById("signup-btn");
const signin_form = document.getElementById("signin-form");
const signup_form = document.getElementById("signup-form");

//------------------------------------
// xử lý sự kiện submit form đăng nhập
function signin() {
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;

  const userData = localStorage.getItem(email);
  if (userData) {
    const userObj = JSON.parse(userData);
    if (userObj.password === password) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("currentUser", email);
      window.location.href = "../index.html"; // chuyển hướng
    } else {
      alert("Sai mật khẩu!");
    }
  } else {
    alert("Email không tồn tại!");
  }
}

// bắt sự kiện submit form đăng nhập
signin_form.addEventListener("submit", function (event) {
  event.preventDefault();
  signin();
});

// kiểm tra dữ liệu đăng ký
function validateSignupData(username, email, password, confirmPassword) {
  if (username.includes(" ")) {
    alert("Username không được chứa khoảng trắng!");
    return false;
  }
  if (confirmPassword !== password) {
    alert("Password và Confirm Password phải giống nhau!");
    return false;
  }
  if (localStorage.getItem(email)) {
    alert("Email đã được sử dụng!");
    return false;
  }
  return true;
}

// xử lý sự kiện đăng ký
function signup() {
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (validateSignupData(username, email, password, confirmPassword)) {
    const newUser = { username, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));
    alert("Đăng ký thành công!");
    switch_signin_btn.click();
  }
}

// bắt sự kiện submit form đăng ký
signup_form.addEventListener("submit", function (event) {
  event.preventDefault();
  signup();
});

// chuyển đổi form
switch_signin_btn.addEventListener("click", function () {
  signin_form.style.display = "block";
  signup_form.style.display = "none";
  this.classList.add("active");
  switch_signup_btn.classList.remove("active");
});

switch_signup_btn.addEventListener("click", function () {
  signin_form.style.display = "none";
  signup_form.style.display = "block";
  this.classList.add("active");
  switch_signin_btn.classList.remove("active");
});
