// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
// Key Takeaways:
// Type Conversion in Comparisons: When using relational operators (>, <, >=, <=), null is converted to 0.
// Loose Equality (==): null is only loosely equal to undefined and no other value.
// Strict Equality (===): null and undefined are not strictly equal because they are different types.
// This behavior is part of JavaScript's quirks and can lead to unexpected results. Always use === for comparisons when you want to avoid type coercion.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);