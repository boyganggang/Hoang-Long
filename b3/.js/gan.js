console.group("Toan tu Gan");
// =: dau gan/ assign
// const: bat buoc gan gia tri khi khai bao
const a = 10; 

// relative: +=, -=, *=, /=, %=, **=
let b = 5;
console.log(b += 2); // b = b + 2;
console.log(b -= 3); 
console.log(b *= 2); 
console.log(b /= 4); // b = b / 4
console.log(b %= 2); 
console.log(b **= 3);

// prefix: ++, --
let c = 10;
console.warn(++c); // c = c + 1; // 11
console.warn(c);

// postfix: ++, --
let d = 10;
console.error(d++); // 10
console.warn(d);

console.groupEnd("Toan tu Gan");