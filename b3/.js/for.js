// Vong lap huu han ( xac dinh so lan lap ro rang)
// for i---------------------
console.group("Vong lap for i");
// dem nguoc thoi gian 10 giay
let i = 10;

for (let i = 10; i > 0; i--) {
    setTimeout(function () {
    console.log(i);
}, (10 - i) * 1000);
}
// do happy new year phai xuat hien sau -> them set time out de dong bo hoa
setTimeout(() => console.log("Happy new year!"); 11000);
console.groupEnd("Vong lap for i");

// set interval ------------------
console.group("Set interval");
console.log("Interval: hàm lặp lại sau ... milisec -> hàm return về id");
console.log("-> muốn dừng lại -> clear interval đúng id");
const str = "Happy new year";
const charList = str.split("");
let count = 0;
const id = setInterval(() => {
  document.writeln(charList[count]);
  count++;
  if (count >= charList.length) {
    clearInterval(id);
  }
}, 1000);

console.groupEnd("Set interval");
// for each  ---------------------

// for of ---------------------

// for in ---------------------