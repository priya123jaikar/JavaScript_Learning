//Arithmetic Operators

let a = 5 ;
let b = 2;

console.log("a = " , a , " & b = " , b);
console.log("a + b = " , a+b)
console.log("a - b = " , a-b)
console.log("a * b = " , a*b)
console.log("a / b = " , a/b)
console.log("a % b = " , a%b)
console.log("a ** b = " , a**b) //5^2

//Unary Operator

let x = 5 ;
let y = 2 ;

 console.log("x = " , x , "y = " , y);
//  x = x + 1;
x++;
y--;
 console.log("value of x is : " , x);
 console.log("value of y is : " , y);

//  console.log("a++" , a++);
//  console.log("a" , a++);
 console.log("++a" , ++a);
 console.log("a" , a)



 //Assignment Operator

 let c = 5 ;
 let d = 2 ;
console.log("c = " , c , "d = " , d);

// console.log("c+=d" , c+=d);
console.log("c-=d" , c-=d)



//Comparison Operators

let m = 5;
let n = 2;
console.log("m = " , m , "n = " , n);
console.log("5 == 2 ? " , m == n)
console.log("5 != 2 ? " , m != n)

let num1 = 5;
let str1 = "5";
console.log("num1 = " , num1 , "str1 = " , str1);
console.log("num1 == str1" , num1 == str1);
console.log("num1 === str1" , num1 === str1);
console.log("num1 != str1" , num1 != str1);
console.log("num1 !== str1" , num1 !== str1);
console.log("num1 > str1" , num1 > str1);
console.log("num1 >= str1" , num1 >= str1);
console.log("num1 < str1" , num1 < str1);
console.log("num1 <= str1" , num1 <= str1);


//Logical operators
let m1 = 5;
let n1 = 2;
console.log("m1 = " , m1 , "n1 = " , n1);

let cond1 = m1 > n1 ;
let cond2 = n1 > m1 ;
console.log("cond1 && cond2" , cond1 && cond2)
console.log("cond1 || cond2" , cond1 || cond2)
console.log("!cond1" , !cond1);

//Conditional Statements

let age = 16;

if(age >= 18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you cannot vote")
}


/***************************************************************** */

let mode = "dark";
let color;

if (mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white"
}
console.log(color);

/******************************************************************** */

let mode1 = "blue";
let color1;

if (mode1 === "dark"){
    color1 = "black";
}
else{
    color1 = "white"
}
console.log(color1);


//odd or even

let num = 15;
if(num%2===0){
    console.log(num , "is even")
}
else{
    console.log(num , "is odd")
}

//else if

let mode11 = "blue";
let color11;

if(mode11 === "dark"){
    color11 = "black";
}
else if (mode11 === "blue"){
    color11 = "blue";
} else if (mode11 === "pink"){
    color11 = "pink";
} else{
    color11 = "white";
}
console.log(color11);

//ternary operator

let age1 = 25;
let result = age1 >= 18 ? "adult" : "not adult";
console.log(result);




//practice question1

let number = prompt("Enter a number");

if(number % 5 === 0){
    console.log("Number is divisible by 5");
}
else{
    console.log("Not divisible by 5")
}


//practice question 2

let score = 7;
let grade;

if ( score >= 80 && score <=100){
    grade = "A" ;
}
else if (score>= 70 && score <89){
    grade ="B"
}
else if (score>= 60 && score <69){
    grade ="C"
}
else if (score>= 50 && score <59){
    grade ="D"
}
else{
    grade = "F"
}
console.log(grade);
