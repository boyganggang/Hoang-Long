// Ham ------------------
// Định nghĩa: là 1 khối lệnh thực thi 1 nhiệm vụ cụ thể
// Cong dung: tách code -> tái sử dụng code + gọn code hơn
// khai bao ========================
const parameters = 10; // day la bien ngoai -> k lien quan
function functionName(parameters) {
  // khoi lenh lam ....
  console.log(parameters, "Đây là tham số");
  return "tra ve gia tri cu the";
}
// goi ham =======================
functionName(15);
console.log(typeof functionName); // function

// ham tu chay ===================
// param = ?: mac dinh gia tri cua bien neu khong dien
console.log(
  (function (a, b = 10) {
    return a + b;
  })(15)
);
// arrow function (ES6) ===========================
// document.body.addEventListener("click", () => console.log("first"));

const sum = (a, b) => a + b; // giong ham dong 16
console.log(sum(12, 4));

// context (ngu canh - this) ===============================
const student = {
  fullName: "Nguyen Van A",
  age: 12,
  courses: ["GA", "JSB", "PB"],
};
// ===: strict mode: so sánh nghiêm ngặt (cả giá trị + kiểu dữ liệu)
student.findCourse = (key) => {
  return student.courses.filter((item) => item === key);
};

console.log(student.findCourse("GA"));

// arrow function: khong ghi nho ngu canh -> this -> trả về this của function cha 
// document
//   .querySelector("#btn")
//   .addEventListener("click", () => console.log(this)); // window

document.querySelector("#btn").addEventListener("click", function (e) {
  console.log(this); // tra ve button dang tuong tac
});