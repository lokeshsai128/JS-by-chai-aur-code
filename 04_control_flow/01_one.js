// //if only true conditions executes block of statement
// // <, >, <=, >=, ==, ===, !==

// const isLoggedIn = true;
// const temperature = 41;

// if(temperature <50){
//     console.log(`Temperature is less than 50 degrees which is : ${temperature}`);
// }
// else{
//     console.log(`Temperature is greather than 50 degrees which is : ${temperature}`)
// }
// console.log("Temperature is checked!")

// let score = 200
// if(score > 100){
//     let power = "fly";
//     console.log(`User power is : ${power}`);
// }
// console.log(`User power : ${power}`)

// const balance = 1000
// // if(balance > 500) console.log("it is implicit, if we use only one statement"),console.log("never write like this");
// if(balance<500){
//     console.log("balance is less than 500")
// }
// else if(balance<750){
//     console.log("balance is less than 750")
// }
// else if(balance<900){
//     console.log("balance is less than 900")
// }
// else{
//     console.log("balance is less than 1200")
// }

const isLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In!")
}