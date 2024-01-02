console.log("Hello Javascript");

//variables

fullName = "Priya";
console.log(fullName)

let age = 24;
console.log(age);

const PI = 3.14;
console.log(typeof(PI))

const x = null;
console.log(typeof(x)); // type of null is object


//objects

const student = {
    name : "Priya",
    age : 24,
    cgpa: 8.53,
    isPass:true
}
console.log(student.name);
console.log(student["age"])

student["age"] = student["age"] + 1;
console.log(student.age);


const product = {
    title : "Ball Pen",
    rating:  4,
    offer : 5 ,
    price : 270
};
console.log(product)