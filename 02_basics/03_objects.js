 /* two types to decalre an object
1. as literal (that is not singleton)
2. as constructor (it is singleton)  (object.create)
SINGLETON => it is an unique object 
*/

const mySym = Symbol("key1")

const JsUser = {
    name : "Devender",
    "full name" : "Devender Choudhary",
    [mySym] : "myKey1",
    age : 18,
    location : "Jaipur",
    email : "devender@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// two ways to access a property from the object
console.log(JsUser.email);
// devender@google.com
console.log(JsUser["email"]);
// devender@google.com

console.log(JsUser["full name"]);
// Devender Choudhary
// access of full name cannot be done by the dot operator

console.log(JsUser[mySym]);
// myKey1

JsUser.email = "devender@chatgpt.com"

//Object.freeze(JsUser)
// to avoid or ignore any further changes in the object properties

JsUser.email = "devender@microsoft.com"

console.log(JsUser);
/* {
  name: 'Devender',
  'full name': 'Devender Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'devender@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello JS User");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}

console.log(JsUser.greeting());
// Hello JS User
console.log(JsUser.greetingTwo());
// Hello JS User, Devender






