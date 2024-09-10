// const coding = ['js','python','java','c++','ruby']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];
// // const newNums = myNums.filter( (num) => num>4)
// const newNums = myNums.filter( (num) => {        //if scope is started then we must use the return keyword to return the objects
//    return num>4
// });

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    {title : "Book-1", genre : "History", publish : "1978", edition : "2016"},
    {title : "Book-2", genre : "English", publish : "1975", edition : "2018"},
    {title : "Book-3", genre : "Scientific", publish : "1986", edition : "2006"},
    {title : "Book-4", genre : "physics", publish : "1982", edition : "2009"},
    {title : "Book-5", genre : "chemistry", publish : "1978", edition : "2019"},
    {title : "Book-6", genre : "Personal-Development", publish : "1999", edition : "2016"},
    {title : "Book-7", genre : "physics", publish : "1979", edition : "2015"},
    {title : "Book-8", genre : "Religious", publish : "1983", edition : "2020"},
    {title : "Book-9", genre : "History", publish : "1995", edition : "2021"},
    {title : "Book-10", genre : "Scientific", publish : "1991", edition : "2013"},
];

const userBooks = books.filter( (bk) => bk.genre === "Scientific");
console.log(userBooks);