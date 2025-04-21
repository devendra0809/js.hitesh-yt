const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // 100 (changed to string to use the properties of the string)
console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00

const otherNum = 69.5678
console.log(otherNum.toPrecision(3)); // 69.6

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// ------------------ MATHS -------------------------

console.log(Math);

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(8.8)); // 8

console.log(Math.min(4,5,7,8,1)); // 1
console.log(Math.max(5,3,7,9,1)); // 9

console.log(Math.random()); // anything between 0 and 1

console.log((Math.random()) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);
















