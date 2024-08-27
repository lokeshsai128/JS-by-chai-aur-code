const name = "lokesh"
const repoCount = 50

// console.log(name+repoCount+" value");  //This is outdated syntax, use backtext instead which is shown below

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //this is string interpolation a modern way, can be useful for on the go to use the methods

//another way of declaring a String
const gameName = new String("lokesh sai")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

