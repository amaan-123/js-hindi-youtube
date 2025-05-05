// // this in object 
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); 
//         console.log(this); 
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 
// // outputs: {} (in Node.js)
// // outputs: Window (in browser)

// // this in functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this); // outputs: Object [global](in Node.js)
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); 
//     // outputs: {} (in Node.js)
//     // outputs: Window (in browser)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// when returning in one-line use implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 ) // used in React

// to implicitly return objects in arrow functions, put parentheses around them
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()