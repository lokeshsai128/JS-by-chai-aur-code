// const tinderUser = new Object()  // this is a singleton object
const tinderUser = {}  // this is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "loki"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "loki@gmail.com",
    fullname : {
        userfullname : {
            firstname : "lokesh",
            lastname : "sai"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a",4 : "b"}
const obj4 = {5 : "a",6 : "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "l@gmail.com"
    },
    {
        id : 1,
        email : "l@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// +++++++++++++++++++ Destructuring an object +++++++++++++++++++
const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const{courseInstructor : instructor} = course

console.log(instructor);

// const navbar = ({company}) => {    //will learn later about this

// }
// navbar(company = "hitesh")

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// try randomuser me api once to get the sample response of an api to see
// and to understand it we can use a tool like json formatter

// [
//     {},
//     {},
//     {}
// ]