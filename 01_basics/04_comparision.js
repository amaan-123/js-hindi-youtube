// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// 
console.log("2" > 1);
console.log("02" > 1);
/**
 * Line 8: console.log("2" > 1);
 * - The string "2" is converted to a number due to type coercion.
 * - After conversion, the comparison becomes 2 > 1, which evaluates to `true`.
 *
 * Line 9: console.log("02" > 1);
 * - The string "02" is also converted to a number due to type coercion.
 * - After conversion, the comparison becomes 2 > 1, which evaluates to `true`.
 */

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null < 0); // false
// console.log(null <= 0); // true
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// Key Takeaways:
// Type Conversion in Comparisons: When using relational operators (>, <, >=, <=), null is converted to 0.
// Loose Equality (==): null is only loosely equal to undefined and no other value.
// Strict Equality (===): null and undefined are not strictly equal because they are different types.
// This behavior is part of JavaScript's quirks and can lead to unexpected results. Always use === for comparisons when you want to avoid type coercion.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(false == 0); // true
console.log(false == ''); // true
console.log('' == 0); // true
console.log(false == undefined); // false
console.log(false == null); // false

// === 

console.log("2" === 2);