if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a); // a is not defined
//console.log(b); // b is not defined
//console.log(c); // 30 is printed as "var" is not following any block scope rules

function one(){
    const username = "devendra"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()   
}
//one()

if(true){
    const username = "devendra"
    if(username === "devendra"){
        const website = " youtube"
        console.log(username + website);   
    }
}

// *****************INTERESTING**********************


console.log(addone(5)) // 6
function addone(num){
    return num+1
}


console.log(addTwo(5)) // cannot access addTwo before initialization bcz the declaration of the function is of diff type (Hoisting)
const addTwo = function(num){
    return num + 2
}


