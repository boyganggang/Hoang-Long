const myClass = document.querySelectorAll(".myClass");
console.log(myClass); // NodeList -> foreach

const myClass1 = document.getElementsByClassName("myClass");
console.log(myClass1); // HTMLCollection

// create element
const newDiv = document.createElement("div");
newDiv.setAttribute("href", "#");
newDiv.innerHTML = `<h1>Hello</h1>`;
newDiv.dataset.color = "yellow"; // them thuoc tinh data-id

document.body.prepend(newDiv); // add tren dau
// ----------------------------
// BAT SU KIEN
let counter1 = 0;
document.getElementById("btn1").onclick = () => {
  counter1++;
  console.log(`Clicked ${counter1}`);
};

const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.textContent = "Button 2";
btn2.addEventListener("click", () => console.log("clicked btn2"));

document.body.appendChild(btn2);

const btnHTML = `<button id = "btn3" >Button 3</button>`;
document.body.innerHTML += btnHTML;

document.body.addEventListener("click", (evemt) => {
    console.log(event.target);
    if (evemt.target.closest("#btn3")) {
        console.log("Clicked btn3")
    }
});