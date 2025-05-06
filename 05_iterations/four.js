// for...in loop

// vs-code suggested template for the for...in loop
// removed the if statement, but it is a good practice to check if the key is an own property of the object
// for (const key in object) {
    //     // to avoid iterating over properties from the prototype chain
    //     // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     //     const element = object[key];   
    //     // }
// }

// can use for...in loop to iterate over the properties of an object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// can also iterate over an array using for...in loop, but for keys it returns the index of the array
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(`${key} index has value: ${programming[key]}`);
}

// // Maps are not iterable with for...in loop, but you can use for...of loop to iterate over the keys and values of a map
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// // doesn't work:
// for (const key in map) {
//     console.log(key);
// }