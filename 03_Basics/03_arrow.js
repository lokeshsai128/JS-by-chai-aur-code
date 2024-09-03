const user = {
    username : "lokesh",
    price : 999,

    welcome : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcome();
// user.username = "sai";
// user.welcome();

// console.log(this);

// function chai(){
//     let username = "lokesh";
//     console.log(this.username);   
// }
// chai()

// const chai = function(){
//     let username = "lokesh";
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "lokesh";
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);  //in react js this is very useful to use parenthesis like this
//if we use the return keyword then it is explicit, without return keyword then it is implicit

const addTwo = (num1, num2) =>  ({username : "lokesh"}) //we must use the parenthesis to return a object value
console.log(addTwo(2,3));
