// Return type of variables in JavaScript
// 1) Primitive Datatypes // call by value (copy)
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Reference (Non primitive) Datatypes // call by reference(of original value)
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
// https://262.ecma-international.org/5.1/#sec-11.4.3

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);
console.log(typeof anotherId);
const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const herosArray = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22
}
console.log(typeof herosArray);

let myObjWithMethod = {
    name: "hitesh",
    age: 22,
    hello: function(){
        console.log("Hello world");
    }
}
console.log(typeof myObjWithMethod);

let myObjWithNestedObject = {
    name: "hitesh",
    age: 22,
    hello: function(){
        console.log("Hello world");
    },
    nestedObj: {
        name: "hitesh",
        age: 22,
        hello: function(){
            console.log("Hello world");
        }
    }
}
console.log(typeof myObjWithNestedObject);

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);