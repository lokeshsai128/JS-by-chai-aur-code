// const coding = ['js','python','java','c++','ruby']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter( (num) => num>4)
const newNums = myNums.filter( (num) => {        //if scope is started then we must use the return keyword to return the objects
   return num>4
});
console.log(newNums);