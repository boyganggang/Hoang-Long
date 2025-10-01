// khai bao ------------------------
const obj = {}
console.log(obj)
// them thuoc tinh moi
obj.a = 10;
console.log(obj)

// tao loai cho object---------------------
class Animal{
    constructor(name)  {
    this.$name =
    this.$speak = "abc";
        }
}

// tao obj
const obj1 = new Animal("mno")
console.log(obj1)

// duyet object (for in) ------------------
for (let key in obj1) {
  console.log(key, obj1[key]);
}

// toan tu in -> return bool ---------------------------
console.log("a" in obj || "Khong co"); // kiem tra key a co ton tai trong obj

// ham hasOwnProperty -> return bool ------------------
console.log(obj1.hasOwnProperty("$gender") ? "co" : "khong"); // false (khong)

// xoa key -------------------
const obj2 = { ...obj1, gender: 0 };
console.log(obj2);

// toan tu rest --------------
const { $name: animalName, ...otherInfo } = obj2;
console.log(animalName);
console.log(otherInfo);

// -----------------------
//  KIEM TRA LOAI
console.log(typeof []); // object - x array
console.log(Array.isArray([])); //true

console.log(typeof {}); //object