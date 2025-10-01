// Tạo ra một hình tam giác từ các số:
// Viết một chương trình tạo ra một tam giác số với số dòng do người dùng nhập vào.
let rows = parseInt(prompt("So dong cua tam giac: ")); // chuyen string -> int
let str = "";
for (let index = 1; index <= rows; index++) {
  for (let j = 1; j <= index; j++) {
    str += j + "";
  }
  str += "\n";
}
console.log(str);

// Tạo ra một chuỗi đối xứng:
// Viết một chương trình tạo ra một chuỗi đối xứng từ một chuỗi do người dùng nhập vào.
let strInp = prompt("Nhap chuoi:");
let strInpArr = strInp.split("");
// lat nguoc arr
for (let index = strInpArr.length - 1; index >= 0; index--) {
  strInp += strInpArr[index];
}
console.log(strInp)