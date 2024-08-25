// primitive 

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345678934568976543456n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","heman","krish"]
let myObj = {
    name : "Lokesh",
    age : 21,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof heros)