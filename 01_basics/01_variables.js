const accountId = 144553
let accountEmail = "devender@googe.com"
var accountPassword = "080922"
accountCity = "Jaipur" // not a  safe option to declare a variable but it works in the javascript


//accountId = 2 //Not allowed as variable type is const

/*
prefer not to use var
because of issue in block scope ans functional scope
*/

accountPassword = "080923"
accountCity = "Noida"
accountEmail = "deepak@gmail.com"

console.log(accountPassword);
console.table([accountEmail, accountId, accountPassword])