const marvel_heros = ["ironman", "thor","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

//in concat we can only concat 2 arrays, whereas by usng spread operator we can concat more than 2 arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Lokesh"));
// console.log(Array.from("Lokesh"));
// console.log(Array.from({name : "lokesh"});  //interesting case for interviews, becaues it doesn't know whether to make the arrays of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

