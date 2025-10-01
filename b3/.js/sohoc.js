console.group("Toan tu so hoc")
let so1 = 100;
let so2 = 1023;
console.log(so1 + so2);
console.log(so1 - so2);
console.log(so1 * so2);
console.log(so1 / so2);
console.log(so2 % so1); // chia lay du
console.log(so1 ** 2); // luy thua
// Math -------------------------------
// random 10 -> 20
console.log(Math.random() * 10 + 10);

// lam tron 
// 1. khong lay so thap phan (so nguyen)
console.log(Math.round(10.5)); // 11
console.log(Math.floor(10.5)); // 10 (lam tron xuong)

// 2. lay so thap phan (2 chu so)
console.log(Math.round(10.55555 * 100) / 100); // 10.56