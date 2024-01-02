let str = "Javascript";
let str1 = 'Priya'
console.log("Length of str:" , str.length)
console.log("index of s", str[4]);

//Template Literals

let specialString = `This is a template literal`;
console.log(specialString)

//Example

let obj = {
    item : "pen" ,
    price : 10
};

console.log("the cost of " , obj.item , "is" , obj.price , "rupees")

//or using single string

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)

//Escape Character
str2 = "Hello\nJavascript"
console.log(str2.length);


//tab space

console.log("Hello\tJavascript")


//string methods

str3 = "Good Morning";
str4 = "  World!!"
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3.slice(2,6));
console.log(str3.concat(str4));
console.log(str3.replace("Morning" , "Evening"))
console.log(str3.charAt(3))


//practice question
let userName = prompt("Enter Your Full Name")
console.log("@"+userName+userName.length);
