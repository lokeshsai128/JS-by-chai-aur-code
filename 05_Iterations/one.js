// //for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best");
//     }
//     console.log(i);   
// }
// // console.log(i);

// for (let i = 1; i < 10+1 ; i++) {
//     // console.log(`Outer loop value : ${i}`);
//     console.log("------------------");
//     console.log("Table : "+i);
//     console.log("------------------");
//     for (let j = 1; j < 10+1; j++) {
//         // console.log(`Inner loop value ${j} of outerloop ${i}`);
//         console.log(i + " x " + j+" = "+ i*j);
//     }
// }

// let myArray = ["ironman","thor","captain america"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// //break and continue statements
// for(let i = 1;i<20;i++){
//     if(i == 5){
//         console.log(`5 is detected`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i=0;i<20;i++){
    if(i%2==0){
        continue
    }
    console.log(`${i} is not a even number`)
}
