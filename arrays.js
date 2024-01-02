//Arrays (collection of items)

let marks = [97 , 82 , 75 , 64 , 89];
console.log(marks)
console.log(marks.length)

let heroes = ["ironman" , "thor" , "hulk" , "shaktiman" , "spiderman"];
console.log(heroes)
console.log(typeof marks)

//Looping over an array using for loop'

for(let idx = 0 ; idx<heroes.length ; idx++){
    console.log(heroes[idx])
}

//using for of

for(let hero of heroes){
    console.log(hero)
}

let cities = ["delhi" , "bangalore" , "patna" , "hyderabad" , "pune"];
for(let city of cities){
    console.log(city.toUpperCase());
}


//practice question

let marks1 = [85 , 97, 44 , 37 , 76 , 60]
let sum = 0;
for(let val of marks1){
    sum+=val;
}
let avg = sum/marks1.length;
console.log(`avg marks of the class = ${avg}`);

//practice question

let items = [250 , 645, 300 , 900 , 50];
let i=0;
for(let val of items){
    console.log(`value of index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

//or
let items1 = [250 , 645, 300 , 900 , 50];
for(let i =0 ; i<items1.length ; i++){
    let offer1 = items1[i] /10;
    items1[i] -= offer1;
}
console.log(items1)


//push & pop

let foodItems = ["potato" , "apple" , "litchi" , "orange"];
foodItems.push("chips" , "coldDrink" , "biscuits")
console.log(foodItems)
foodItems.pop();
console.log(foodItems)

console.log(typeof foodItems);
console.log( typeof foodItems.toString())

//concat

let marvelHeroes = ["thor" , "spiderman" , "ironman"];
let dcHeroes = ["superman" , "batman"];
let indianHeroes = ["shaktiman" , "krish"];

let heroes1 = marvelHeroes.concat(dcHeroes , indianHeroes);
console.log(heroes1)

//unshift & shift

marvelHeroes.unshift("antman");
console.log(marvelHeroes)
marvelHeroes.shift();
console.log(marvelHeroes)




//slice

let snacks = ["biscuits" , "maggiee" , "pizza" , "pasta" , "chips"];
console.log(snacks);
console.log(snacks.slice(1,4))

//splice

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2 , 2 , 101, 102);
console.log(arr);

//Add element

arr.splice(2,0,105)
console.log(arr)

//Delete element

arr.splice(3,1)
console.log(arr)


//Practice question

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Nethflix"];
console.log(companies)
// companies.shift();
// console.log(companies)
companies.splice(2,1,"Ola");
console.log(companies)
companies.push("Amazon");
console.log(companies)