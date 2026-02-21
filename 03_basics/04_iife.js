// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log('DB CONNECTED');  
}) ();

// ()();  syntax for the immediate function performing
// to get rid of the global scope pollution

( (name) => {
    // unamed IIFE and parametered IIFE
    console.log(`DB CONNECTED TWO ${name}`); 
}) ('devendra');