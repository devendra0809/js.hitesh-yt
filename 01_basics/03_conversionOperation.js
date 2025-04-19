let score = "69"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// "33" => 33
// "33ab" => NaN (not a number)
// "undefined" => NaN
// "null" => 0

let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true , 0 => false
// "" => false
// "devender" => true

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32 

console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0