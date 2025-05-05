// Immediately Invoked Function Expressions (IIFE)
// IIFEs (Immediately Invoked Function Expressions) are used to:

// *   **Avoid polluting the global namespace:** Variables and functions declared inside an IIFE are scoped to the IIFE, preventing them from interfering with other code in the global scope.
// *   **Create private variables and methods:**  You can create variables and functions within the IIFE that are not accessible from outside, providing a way to encapsulate data and behavior.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// semi-colon needed after IIFE to avoid issues below
// remove the semi-colon to see that IIFE immediately below will not work 

// console.log('test'); // uncommenting this will make it all work

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

