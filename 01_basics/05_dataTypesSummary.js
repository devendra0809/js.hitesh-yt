// QUESTION (types of data types)
// primitive (copy)
// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt
// non primitive (reference)
// Array, Objects, Functions

// QUESTION 
// JS is dynamically typed language
// Dynamically typed => variables are not declared explicitly(types are determined at the runtime)
// Typescript => static typed (that means variables types are known and checked at the compile time before the code runs)

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);  // false

const hereos = ["Iron Man", "Hulk", "Captain America"]

let myObj = {
    name : "devender",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);  // function (more specifically function object)
console.log(typeof myObj);  // object
console.log(typeof hereos);  // object

// ************************************************************************************************

// There are two typs of memory for data types that are STACK and HEAP

// Stack is for the primitive data types in which copy is passed 

let myName = "devender"
let myAnotherName = myName

myAnotherName = "deepak"

console.log(myAnotherName); // deepak
console.log(myName); // devender

// Heap is for non primitive data types where actual values are the reference

let userOne = {
    email : "devender@google.com",
    upi : "user1@ybl"
}

let userTwo = userOne

userTwo.email = "deepak@gmail.com"

console.log(userOne.email);  // deepak@gmail.com
console.log(userTwo.email);  // deepak@gmail.com












