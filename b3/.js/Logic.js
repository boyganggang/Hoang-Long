console.group("Toan tu logic")
//  and &&---------------------------
const v1 = "";
const v2 = 0;
const v3 = null;
const v4 = NaN;
const v7 = undefined;
const v8 = false;

// and && -----------------------
console.warn(
  "And: Lấy giá trị false gần nhất -> nếu không có -> trả về giá trị vế thứ 2"
);
console.log(v1 && v2 && "ABC"); // v1 la false gan nhat -> ""
console.log("A" && "B" && "C"); //khong co false -> tra ve ve xa nhat

// or || -----------------------
console.warn(
  "Or: Lấy giá trị True gần nhất -> nếu không có -> trả về giá trị vế thứ 2"
);
console.log(v1 || v2 || "ABC"); // "ABC" ep kieu bool -> true -> tra ve "ABC"
console.log(v3 || v8 || v4); // k co true -> tra ve ve cuoi cung
// ap dung or
const fullName = prompt("Nhap ten: ").trim();
console.log(fullName || "Khong co ten");

// not ! -------------------------
console.warn("Not: phủ định giá trị");
console.log(!v8); // true

console.groupEnd("Toan tu Logic");