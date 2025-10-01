console.group("Lenh dieu kien if - else");
const arr = [];
const obj = {};
const obj1 = { name: "A", age: 18 };

// {}: chứa nhiều hơn 1 câu lệnh 
// arr rỗng thì trả về true -> không thể kiểm tra if(arr) -> arr.length
if (arr.length) {
  console.log(arr);
} else console.log("Khong co gia tri");
// toan tu ?. + HTML DOM -----------------------
const tag = document.querySelector("#tag");
if (tag) {
  tag.addEventListener("click", () => console.log("clicked"));
}

tag?.addEventListener("click", () => console.log("clicked"));

console.groupEnd("Lenh dieu kien if - else");