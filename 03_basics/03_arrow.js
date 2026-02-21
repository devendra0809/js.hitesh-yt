// Arrow function

// const user = {
//     username: "Devendra",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this); // give the complete context that is complete detail of the current local object
          
//     }

// }
// user.welcomeMessage() // Devendra , welcome to the website
// user.username = "Hitesh"

// user.welcomeMessage() // Hitesh , welcome to the website

// const chai = function(){
//     let username = "devendra"
//     console.log(this.username); // undefined cannot access this function in any function

//     console.log(this) // information is displayed for this function   
// }
// chai()

// function coffee() {
//     let username = "hitesh"
//     console.log(this.username); // undefined

//     console.log(this); // info is displayed  
// }
// coffee()

// **************** Arrow function *****************

// const chai = () => {
//     let username = "devendra"
//     console.log(this.username); // undefined

//     console.log(this); // {} // an empty context which also comes when this is console.log in the global scope 
// }
// chai()

// arrow function - () => {}

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }    
//     OR

const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(3,4));
