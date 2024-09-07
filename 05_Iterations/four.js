const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['c++','python','java','javascript'];

for (const key in programming) {
    // console.log(programming[key]);   
}

// The map is not iterable by using for in looping method
const map = new Map();
map.set("IN","India")
map.set("UK","United Kindom")
map.set("FR","France")

for (const key in map) {
    console.log(key);
}