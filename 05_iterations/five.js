// So far, for:
// objects: for...in
// arrays: for...of
// maps: for...of

// Now, methods defined on the array object itself
// 1. forEach
// 2. filter
// 3. map
// 4. reduce

const coding = ["js", "ruby", "java", "python", "cpp"]

// 1. forEach: executes a provided function once for each array element

// // don't name the callback function, use an anonymous function
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// // if you want to use a named callback function, you can do it like this:
// function printMe(item){
//     console.log(item);
// }
// // don't invoke the function, just pass the reference to the function
// coding.forEach(printMe)

// // forEach parameters:
// // 1. current value
// // 2. index of the current value
// // 3. array object itself
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )