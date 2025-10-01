const users = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" },
  { email: "user4@example.com", password: "password4" },
  { email: "user5@example.com", password: "password5" },
  { email: "user6@example.com", password: "password6" },
  { email: "user7@example.com", password: "password7" },
  { email: "user8@example.com", password: "password8" },
  { email: "user9@example.com", password: "password9" },
  { email: "user10@example.com", password: "password10" }
];

// bat su kien submit cho form login
document.getElementById("login-form").addEventListener("submit",function (e) {
  // chan luong hoat dong mac dinh
  e.preventDefault();
   // lay du lieu tu input
  const emailInp = document.getElementById("email").value;
  const passwordInp = document.getElementById("password").value;

  // loc danh sach filter: return danh sach []
  const userFromData = users.filter(function (u) {
    return u.email === emailInp && u.password == passwordInp;
  })[0];
  if (userFromData) {
    // neu dang nhap thanh cong -> chuyen mau nen -> tat het form
    document.body.style.backgroundColor = "red";
    document.getElementById("login-form").style.display = "none";
  } else {
    // k thanh cong -> bao loi
    alert("Tai khoan khong trung khop");
  }
});