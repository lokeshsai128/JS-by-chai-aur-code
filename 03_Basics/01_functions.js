function sayMyName(){
    console.log("l");
    console.log("o");
    console.log("k");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()
// console.log(sayMyName());  //undefined
// console.log(sayMyName);  //function

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// console.log(addTwoNumbers(2,5));

function addTwoNumbers(num1,num2){
    console.log("This line will not be printed if it is below the return statement");
    return num1+num2;
}

// const sum = addTwoNumbers(2,5);  //This line will not be printed if it is below the return statement
// console.log(sum);    //This line will not be printed if it is below the return statement  => 7

function isLoggedIn(username = "sai"){
    if(!username){     //this also works : if(username === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(isLoggedIn("lokesh"));

function calculateCartPrice(val1,val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(2,3,5,7));

let myObject = {
    item : "friedrice",
    price : 99
}

function handleObject(anyobject){
    console.log(`item is ${anyobject.item} and price is ${anyobject.price}`);
}

// handleObject(myObject);
// handleObject({
//     item : "biryani",
//     price : 200
// })

const myNewArray = [100,200,300];

function returnSecondValue(SampleArray){
    return SampleArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40]));
