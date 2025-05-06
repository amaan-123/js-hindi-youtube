// 3. map: creates a new array with the results of calling a provided function on every element in the calling array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})

// chaining methods
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // gets from previous map
                .filter( (num) => num >= 40) // gets from previous map
console.log(newNums);

// could have used other loops like for, for...of, but preferred to use map, filter, reduce as they are more readable and easier to understand