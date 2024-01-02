//for loops
for(let count =1 ; count <=3 ; count++){
    console.log("Hello Javascript");
}

//calculate sum of 1 to 5
let sum = 0;
for(let i =1 ; i <=5 ; i++){
   sum = sum + i;
}

console.log(sum)


//while loop
let j = 1;
while(j<=5){
    console.log("j=" ,j);
    j++;
}


// do while loop


let k = 1;
do{
    console.log("Hello Javascript");
    k++;
}while(k<=10);




let m = 1;
do{
    console.log("m=" , m);
    m++;
}while(m<=5);


//for-of loop (helps to apply loop on arrays and strings)

//syntax
// for(let val of strVar){

// }

let str = "JavaScript";
let size = 0;
for(let n of str){
    console.log("n=" , n);
    size++;
}
console.log("Size = " , size);


//for in loop (helps to apply loop on objects)

let student = {
    name : "Priya",
    age : 24,
    cgpa : 8.53,
    isPass : true
}

for(let key in  student){
    console.log("key = " , key , "value =" , student[key] );
}

//practice question

for(let c = 0 ; c<=100 ; c++){
    if(c % 2 == 0){
        console.log(c);
    }
}

//practice question

let gameNum = 25 ;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum){
    userNum = prompt("You entered wrong number , Guess again:");

}
console.log("Congratulations , you entered the right number");