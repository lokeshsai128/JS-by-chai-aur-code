const accountId = 144553
let accountEmail = "account@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2
accountEmail = "ac@ac.com"
accountPassword="235423"
accountCity = "kolkata"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})