// Singleton - if declared as constuctors then it is singleton, if by literals as shown below then it is not singleton

//object literals
// Object.create  // by singleton

const mySym = Symbol("key1");
const JsUser = {
    name : "lokesh",
    "full name" : "lokesh sai",  //by default the name-variable is also string
    age : 21,
    [mySym] : "mykey1",
    location : "Hyderabad",
    email : "lokesh@google.com",
    isLoggedIN : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "lokesh@chatgpt.com";
// console.log(JsUser["email"]);

// Object.freeze(JsUser)  //the changes will not be propagated after this
JsUser.email = "lokesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
