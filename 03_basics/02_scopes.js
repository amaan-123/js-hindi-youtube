//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// Testing function hoisting with function declarations and function expressions

// Function hoisting allows us to call a function before its declaration
console.log(addone(5)) // This works because `addone` is a function declaration

function addone(num) {
    return num + 1
}

// Testing function expressions and hoisting
// This will throw an error because `addTwo` is a function expression and is not hoisted
addTwo(5) 
const addTwo = function(num) {
    return num + 2
}
