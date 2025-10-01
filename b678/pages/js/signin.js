//------------------------------------------
// khai bao cac html element can su dung
const switch_signin_btn = document.getElementById("signin-btn");
const switch_signup_btn = document.getElementById("signup-btn");
const signin_form = document.getElementById("signin-form");
const signup_form = document.getElementById("signup-form");
//------------------------------------
// xu ly su kien submit form dang nhap
function signin() {
// lay du lieu input
const email = document.getElementById("signinEmail").value;
const password = document.getElementById("signinPassword").value;

// tim du lieu trong local storage (email la key)
const userData = localStorage.getItem(email);
if (userData) {
    // chuyen kieu du lieu cho Data
    const user0bj = JSON.parse(userData); //string -> object
    // kiem tra password
    if (user0bj.password === password) {
        alert("Dang nhap thanh cong!");
        // luu thong tin dang nhap
        localStorage.setItem("currentUser", email);
        // chuyen huong ve trang chu
        location.href + "../index.html";
    } else {
        // sai pass
        alert("sai thong tin dang nhap!");
        return;
    }
} else {
    // khong co du lieu nguoi dung
    alert("Email khong ton tai tren he thong!");
}
}

// bat su kien
signin_form.addEventListener("submit", function (event) {
    event.preventDefault(); //cham luong hoat dong mac dinh tu HTML form
    signin();
});

// kiem tra du lieu nhap vao
function validateSignupData(username, email, password, confirmPassword) {
    if (username.includes("")) {
        alert("username khong duoc chua khoang trang!");
        return false;
    }
    if (confirmPassword !==password) {
        alert("password va confirm password phai giong nhau!");
        return false;
    }
    if (localStorage.getItem(email)) {
        alert("Email da duoc su dung!");
        return false;
    }
    return true;
}
// --------------------
//  xu ly su kien form dang ki ( luu tru du lieu vao localStorage)
function signup() {
    // lay du lieu lieu tu input
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupEmail").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // kiem tra du lieu hop le
    const isvalid = validateSignupData (
        username,
        email,
        password,
        confirmPassword,
    );
    if (isvalid) {
        // tao obj new user
        const newUser = {
            username,
            email,
            password,
        };
        // luu du lieu vao local storage
        localStorage.setItem(email, JSON.stringify(newUser));
        alert("Dang ki thanh cong");

        // chuyen ve trang dang nhap
        switch_signin_btn.click();
    }
}
//  bat su kien
signup_form.addEventListener("submit", function (event) {
    event.preventDefault(); // chan luong hoat dong mac dinh tu HTML form
    signup();
});
// chuyển đổi giữa đăng nhập và đăng kí
switch_signin_btn.addEventListener("click", function () {
  signin_form.style.display = "block";
  signup_form.style.display = "none";

  this.classList.add("active"); // this = switch_signin_btn
  switch_signup_btn.classList.remove("active");
});

switch_signup_btn.addEventListener("click", function () {
  signin_form.style.display = "none";
  signup_form.style.display = "block";

  this.classList.add("active"); // this = switch_signup_btn
  switch_signin_btn.classList.remove("active");
});