console.group("Toan tu So sanh (return boolean)");
let m = 100;
let n = "100";
let o = 12.3;

console.log(m < o);
console.log(m > o);
console.log(m >= o);
console.log(m <= o);

// ==: so sanh gia tri
console.log(m == n); // true
// ===: SO SANH NGHIEM NGAT -> so sanh gia tri + kieu du lieu
console.log(m === n); // false

// !=: so sanh gia tri khac nhau
console.log(m != n); // false

// !==: so sanh gia tri + kieu du lieu khac nhau
console.log(m !== n); // true
console.groupEnd("Toan tu So sanh");