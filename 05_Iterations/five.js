const coding = ['js','python','java','c++','ruby']

coding.forEach( function (val){
    // console.log(val);
} );

coding.forEach( (item)=> {
    // console.log(item);
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach(  (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

mycoding.forEach( (item)=> {
    console.log(item.languageName);
})