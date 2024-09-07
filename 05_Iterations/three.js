// for of

// ["","",""] -> we can have strings inside an array
// [{},{},{}] -> we can also have objects inside an array which can be accessed by using either dot notation or []-brackets

// const arr = [1,2,3,4,5];

// for(const num of arr){
//     console.log(num); 
// }

// const greetings = "Hello macha!";
// for (const element of greetings) {
//     if(element === " "){
//         continue;
//     }
//     else{
//         console.log(`Each char in greetings : ${element}`);
//     }
// }

// Maps
const map = new Map();
map.set("IN","India")
map.set("UK","United Kindom")
map.set("FR","France")

console.log(map);