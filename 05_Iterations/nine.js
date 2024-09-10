const myNums = [1,2,3,4,5]
// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`accumulatorvalue is : ${acc} and currentvalue is : ${currval}`);
//     return acc+currval
// },0);

// const myTotal = myNums.reduce((acc,currval)=>acc+currval,0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "java course",
        price : 999
    },
    {
        itemName : "python course",
        price : 699
    },
    {
        itemName : "javascirpt course",
        price : 899
    },
    {
        itemName : "full stack course",
        price : 9999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const PriceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(PriceToPay);