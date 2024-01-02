
let heading =document.getElementById("heading");
console.dir(heading)

document.querySelector("h1").children; //print the children of h1

let div2 = document.querySelector("div");
console.dir(div2);
console.dir(div2.innerText);
console.dir(div2.innerHTML);
console.dir(div2.textContent);

// practice question

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "Learning Folks!!"

// practice question

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

divs[0].innerText = "new unique value 0";
divs[1].innerText = "new unique value 1";
divs[2].innerText = "new unique value 2";

or

let idx = 1
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}


getattribute

let div = document.querySelector("div");
console.log(div);

let class1 = div.getAttribute("class");
console.log(class1);

setAttribute

console.log(div.setAttribute("class" , "box11"));

style

let div1 = document.querySelector("div");

div1.style.backgroundColor = "green";
div1.style.fontSize= "26px";
div1.innerText = "hello!";
div.style.visibility = "hidden";


// creating element

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi , I am new!</i>";

let div = document.querySelector("div");
div.before(newBtn);
div.before(newHeading);

// practice question

let newBtn = document.createElement("button");
newBtn.innerText = "click me!"

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// practice question2

let para = document.querySelector("p");
para.classList.add("newClass")
para.classList.remove("newClass")

// event Handling

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) =>{
    console.log("btn was clicked!")
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("btn was clicked 2 times");
}
let box = document.querySelector(".box");
box.onmouseover = () =>{
    console.log("you are inside div!!!");
}

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked - handler2");
});
btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked - handler3");
});
btn1.addEventListener("click" , () =>{
    console.log("button1 was clicked - handler4");
});

const handler5 = () =>{
    console.log("button5 was clicked - handler5");
}
btn1.addEventListener("click" , handler5);
btn1.removeEventListener("click", handler5);



//practice question

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click" , () =>{
  if(currMode === "light"){
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor="black";
    // document.querySelector("body").classList.add("dark")
    body.classList.add("dark");
    body.classList.remove("light");

  }else{
    currMode="light";
    // document.querySelector("body").style.backgroundColor="white";
    // document.querySelector("body").classList.add("light")
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode)
})