// // primitive 

// //7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 2345678934568976543456n


// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman","heman","krish"]
// let myObj = {
//     name : "Lokesh",
//     age : 21,
// }

// const myFunction = function(){
//     console.log("Hello world!");
// }

// console.log(typeof heros)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++Stack and Heap memory in java++++++++++++++++++++++++++

// Stack (Primitive) - just takes the values and copies it store in another stack
// , Heap(Non-Primitive) - just reference from the heap where the data is stored and if changes are made, it is effected to every occurence


let myYoutubename = "hiteshchoudary.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename );
console.log(anotherName)

let userOne = {
    email  : "user@google.com",
    upiId : "user@ybl"
}
 
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);