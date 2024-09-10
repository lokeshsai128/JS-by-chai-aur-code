const myNums = [1,2,3,4,5,6,7,8,9,10];
// const Nums = myNums.map( (num) =>  num+10);
// const Nums = myNums.map( (num) => {
//     return num+10;
// })

//not let's understand about chaining
const Nums = myNums
                .map( (num) => num*10)
                .map( (num) => num+1);
console.log(Nums);