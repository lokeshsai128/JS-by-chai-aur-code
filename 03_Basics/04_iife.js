// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    //this is named iife
    console.log(`DB Connected`);
})();

// () - > First parenthesis is for defining the function , () - > this is for executing the function
// and also for using these kind of functions it is mandatory to keep a semicolun at the end the of the function as the compiler should know when to stop the function at some cases like these
// (()=>{
    //this is unnamed iife
//     console.log(`DB Connected Two`);
// })()
//we can also define the function parameters here 
((name)=>{
    console.log(`DB Connected Two by user : ${name}`);
})("lokesh");