// Sử dụng vòng lặp để giải bài toán tổng hợp số học:
// Viết chương trình cho phép người dùng nhập một số nguyên dương n và tính:
let n = prompt("Nhap so nguyen duong"); // type -> string
// Kiểm tra số nguyên dương, nếu chưa đúng yêu cầu người dùng nhập lại.
// chuyen kieu du lieu
// so nguyen: integer
// so thap phan: float
n = parseInt(n);
if (n > 0) {
  // so duong -> > 0
  console.log(n)
  // Tổng của tất cả các số chẵn từ 1 đến n.
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    if (index % 2 == 0) sum += index;
  }
  console.log(sum);
  // Tổng của tất cả các số lẻ từ 1 đến n.
  sum = 0;
  for (let index = 1; index <= n; index++) {
    if (index % 2 != 0) sum += index;
  }
  console.log(sum);
  // In kết quả ra console.
}