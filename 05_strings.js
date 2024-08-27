const name = "lokesh"
const repoCount = 50

// console.log(name+repoCount+" value");  //This is outdated syntax, use backtext instead which is shown below

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //this is string interpolation a modern way, can be useful for on the go to use the methods

//another way of declaring a String
const gameName = new String("lokesh-sai")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);   //can also give negative values here
console.log(anotherString);

const newStringOne = "     lokesh       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lokesh.com/lokesh%20sai";

console.log(url.replace('%20', '-'));  

console.log(url.includes('loke'));   //return type is boolean

console.log(gameName.split('-'));

