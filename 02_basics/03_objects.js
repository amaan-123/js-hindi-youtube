// singleton
// Object.create
// Object.create allows creating a new object with the specified prototype object.


// object literals
// Object literals are a simple way to create objects using key-value pairs.

const mySym = Symbol("key1") 
// Symbols are unique and immutable identifiers, often used as keys in objects to avoid naming conflicts.
const parent = ["fathersName", "mothersName", "guardianName"]
const parentName = ["Aadam", "Hawa" , "Him"]
const JsUser = {
    name: "Hitesh", // Regular key-value pair
    "full name": "Hitesh Choudhary", // Bracket notation is required to access keys with spaces or special characters
    [mySym]: "mykey1", // Using a symbol as a key, accessed via bracket notation
    [parent[0]]: parentName[0],
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // Dot notation to access properties
// console.log(JsUser["email"]) // Bracket notation to access properties

// Bracket notation is necessary to access keys that contain spaces or are stored in variables (like Symbols).
console.log(JsUser["full name"]) // Bracket notation for keys with spaces
console.log(JsUser[mySym]) // Bracket notation to access symbol keys
console.log("Father's name is " + JsUser[parent[0]])

// JsUser.email = "hitesh@chatgpt.com" // Updating a property
// Object.freeze(JsUser) // Freezes the object to prevent modifications
// JsUser.email = "hitesh@microsoft.com" // This won't work if the object is frozen
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); // 'this' refers to the current object (JsUser)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());