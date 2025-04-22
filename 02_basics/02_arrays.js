const marvel_hereos = ["thor", "ironman", "spiderman"]
const dc_hereos = ["superman", "flash", "batman"]

// marvel_hereos.push(dc_hereos)
// console.log(marvel_hereos);
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// it takes the dc_hereos as the single input in the array
// that is taken the input as the array in array

// CONCAT OPERATOR
const allHereos = marvel_hereos.concat(dc_hereos)
console.log(allHereos);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// SPREAD OPEARTOR
const allNewHereos = [...marvel_hereos, ...dc_hereos]
console.log(allNewHereos);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread and concat give the same output to the user

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // in parenthesis we provide the depth to which it got flattened

console.log(real_another_array);
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Devender"));
// false (not an array)
// checking whether the data is an array or not

console.log(Array.from("Hitesh"));
// [ 'H', 'i', 't', 'e', 's', 'h' ]
// converted the given data into the array

console.log(Array.from({name : "deepak"}));
// []
// since this operator cannot convert an object into the array hence give the output as the empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
// converts the given all data types in the form of an array

















