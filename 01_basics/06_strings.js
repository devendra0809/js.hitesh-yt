// two methods for defining a string
const name = 'deepak'

const myName = new String("devender")
// second way of defining a string includes a lot of functions with it

console.log(myName[0]); // d
console.log(myName.__proto__); // {} , this is the object

console.log(myName.length); // 8
console.log(myName.toUpperCase()); // DEVENDER (but the actual strings remain same)

console.log(myName.charAt(3)); // e (at third key the value is e)
console.log(myName.indexOf('d')); // 0 (first occurance)

const newString = myName.substring(2,5) 
console.log(newString);
// ven (last index is not included)

const anotherString = myName.slice(-6,8)  
console.log(anotherString);
// vender (from reverse string to the index given)

const newString1 = "    devender   "
console.log(newString1);
// "    devender    "
console.log(newString1.trim());
// "devender" that is trimmimg of the white spaces and line terminators

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , "-"));
// https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'));
// true
console.log(url.includes('hiittesh'));
// false

const newString2 = 'hitesh-choudhary-2025-YT'
console.log(newString2.split('-'));
// [ 'hitesh', 'choudhary', '2025', 'YT' ]
















