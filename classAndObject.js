// const student = {
//     fullName : "Priya",
//     marks : 94.4,
//     printMarks: function (){
//         console.log("marks = " , this.marks);
//     }
// }

/////////////////////////////////////////////prototype////////////////////////////////////////

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary : 50000,
}

karanArjun.__proto__ = employee;



///////////////////////////////////////////classes////////////////////////////////////////////

class ToyotaCar{
    constructor(brand , mileage){
        console.log("creating new object");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner" , 10);
console.log(fortuner);
// fortuner.setBrand("fortuner")


//////////////////////////////////////inheritance/////////////////////////////////////////////

class Parent{
    hello(){
        console.log("hello")
    }
}
class Child extends Parent{}
let obj = new Child();



//////////////////////////////////

class Person {
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}

let priyaObj = new Engineer("computer engineer");




///////////////////////////////////////////practice question //////////////////////////////////
let DATA = "Secret Information"
class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = " , DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("Priya" , "abc@gmail.com");
let student2 = new User("Ayush" , "ayush@gmail.com");

let admin1 = new Admin("admin" , "admin@gmail.com");



//////////////////////////////////////////////////Error Handling//////////////////////////////////

let a = 5 ;
let b = 10 ;
console.log("a = " , a);
console.log("b = " , b);
console.log("a+b =" , a+b);
try{
    console.log("a+b =" , a+c);
} catch(err){
    console.log(err);
}
console.log("a+b =" , a+b);
console.log("a+b =" , a+b);
console.log("a+b =" , a+b);
console.log("a+b =" , a+b);
console.log("a+b =" , a+b);

