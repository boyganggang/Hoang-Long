// khai báo --------------------------------
// mảng rỗng
const arr1 = [];
// chứa bất kì kiểu dữ liệu nào
const arr2 = [null, undefined, 1, "s", 1.2, false];
// mảng chứa phần tử trống
const arr3 = Array(10);
// truy xuat phan tu -----------------------
// out of range -> undefined
console.log(arr1[10]);
// truy cập phần tử cuối cùng trong danh sách
console.log(arr2[arr2.length - 1]);
// truy cập phần tử trống (empty)
console.log(arr3); // empty x 10
// duyet phan tu -------------------------
// fori: hiển thị cả phần tử bị undefined (không có giá trị/ empty)
for (let index = 0; index < arr3.length; index++) {
  console.log(arr3[index]); // tra ve 10 lan undefined
}
// foreach: lọc phần tử trống (empty) -> không hiển thị
// callbackfunc: value, index, arr (nếu k cần biến nào thì xóa đi - k nhầm thứ tự)
arr2.forEach(function (value, index, arr) {
  console.log(`${index}. ${value}`);
  console.log(arr);
});

// them phan tu ----------------------
//  them vao cuoi (push)
console.log(arr1.push(123)) // tra ve do dai sau khi them phan tu
console.log(arr1)

// them/ cap nhat  phan tu vao giua ( splice)
//  splice ( bat dau cat tu dau, so luong phan tu cat di, phan tu moi)
console.log(arr3.splice(3, 1, "new")); // tra ve danh sach phan tu da cat
console.log(arr3)

// sua phan tu + clone danh sách ---------------------------
const arr4 = arr1;
// chỉ gán địa chỉ tham chiếu -> không copy được giá trị
// -> arr1/ arr4 thay đổi -> bị ảnh hưởng cả 2
arr1[1] = 1;
console.log(arr4, arr1);

// toán tử spread operator
const arr5 = [...arr1];
arr1[0] = 1001;
console.log(arr5, arr1);

// hàm slice
const arr6 = arr1.slice();
arr1[2] = 58;
console.log(arr6, arr1);

// class Array
const arr7 = Array.from(arr1);
arr7[2] = 0;
console.log(arr7, arr1);
// xoa phan tu -----------------------
// splice
arr1.splice(2, 1);
console.log(arr1);