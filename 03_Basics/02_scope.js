//global scope is anywhere outside the { }
//inside   { } can be considered as block scope

let a = 100;
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner : ",a);
    
}
console.log(a);
// console.log(b);
// console.log(c);