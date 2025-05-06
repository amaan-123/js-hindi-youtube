// for of

// arrays: ["", "", ""]
// Maps

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     if (greet === " "){
//         continue; // skip the space
//     }
//     console.log(`Each char is ${greet}`)
// }

// Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

//  a for...of loop returns a 2-member array of [key, value] for each iteration for codes like this:
// for (const key of map) {
//     console.log(key);
// }

// if you want to get the key and value separately, you can use destructuring assignment:
// for (const [key, value] of map) {
    // console.log(key, ':-', value);
// }

// Iterating over objects
// The for...of loop does not work with objects directly. 
// see next file

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// doesn't work:
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }