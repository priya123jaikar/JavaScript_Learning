function myFunction(){
    console.log("Welcome to Javascript world!");
    console.log("We are learning JS ");
}
myFunction();



function myFunction1(msg){ //parameter
    console.log(msg);
}
myFunction1("I love JS"); // argument


//Function -> 2 numbers , sum

function add(a ,b){
    sum = a+b;
    return sum;
   
}
let val = add(3,4);
console.log(val)


//Arrow function

const arrowSum = (a,b) => {
    console.log(a+b);
};
arrowSum(2,3);




const arrowMult = (a,b) =>{
    console.log(a*b);
};
arrowMult(6,6);


const printHello = () =>{
console.log("Helloooo!")
};
printHello();


//practice question

function countVowels(str){
    let count =0;
    for(const char of str){
       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
       }
    }
    console.log(`Total number of vowels in the given string are equals to : ${count}`);
    return count;

}
countVowels("Priya");


//or

const countvOW = (str) => {
    let count =0;
    for(const char of str){
       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
       }
    }
    console.log(`Total number of vowels in the given string are equals to : ${count}`);

    return count;

}

countvOW("ayush");



//foreach

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

//or
let arr1 = [1,2,3,4,5,6]
arr1.forEach((val) =>{
    console.log(val);
})

let cities = ["delhi" , "bengaluru" , "patna"]
cities.forEach((val , idx , arr) =>{
    console.log(val.toUpperCase() , idx , arr);
});


//practice question
let arr2 = [2, 4 , 6 , 7 ,8]
arr2.forEach((val)=>{
    console.log(val*val);
});



//map

let nums = [67, 52 ,39];
nums.map((val) => {
    console.log(val);
});

let num = [23 , 54 , 89];
let newArr = num.map((val)=>{
    return val *2;
});
console.log(newArr);
console.log(num);


//filter

let arr3 = [1,2,3,4,5,6,7];

let everArr = arr3.filter((val) => {
    return val % 2 === 0;
})
console.log(everArr);


//reduce

let arr4 = [1,2,3,4];
const output = arr4.reduce((res , curr) =>{
    return res + curr;
});
console.log(output);

//find largest using reduce

let arr5 = [5,6,7,1,39];
const output1 = arr5.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});

console.log(output1);


//practice question

let stdMarks = [67 , 98 , 56 , 99 , 90 , 78];
let topper =  stdMarks.filter((val) =>{
    return val >=90 ;
});
console.log(topper);

//practice question

let n = prompt("Enter a number");
let newArr1 = [];
for(let i=1 ; i<=n ; i++){
     newArr1[i-1] = i;
}
console.log(newArr1)
const sumResult = newArr1.reduce((prev , curr)=>{
    return prev + curr;
});
console.log(sumResult);

console.log(newArr1)
const mulResult = newArr1.reduce((prev , curr)=>{
    return prev * curr;
});
console.log(mulResult);


