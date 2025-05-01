function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

function add2Numbers(num1 , num2) {
    console.log(num1 + num2)
}

add2Numbers(3,5)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("devendra"))
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500, 2000));
// [ 200, 300, 500, 2000 ]

function cartPrice(val1, val2, ...num1){
    return num1
}
console.log(cartPrice(100, 300, 700, 2000, 2500));
// [ 700, 2000, 2500 ]

const user = {
    username: "devendra",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 300, 500, 800, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));





