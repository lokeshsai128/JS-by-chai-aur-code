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
    console.log(programming[key]);   
}