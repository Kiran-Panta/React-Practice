// JavaScript Basics Practice - Day 11

// Variables: var vs let vs const
var oldWay = "can be redeclared"; // var is old, can be redeclared
let modern = "block scoped"; // let is better
const constant = "cannot change"; // const preferred for constants

console.log(oldWay, modern, constant);

// Primitive data types
let str = "string";
let num = 42;
let bool = true;
let undef;
let nul = null;
let sym = Symbol();

console.log(typeof str, typeof num, typeof bool, typeof undef, typeof nul, typeof sym);

// String methods
let text = "Hello World";
console.log(text.slice(0,5)); // slice part
console.log(text.split(" ")); // split into array
console.log(text.replace("World", "JS")); // replace
console.log(text.includes("Hello")); // check if contains
console.log(text.startsWith("H")); // starts with
console.log(text.padStart(15, "*")); // pad

// Number methods and Math
let pi = 3.14159;
console.log(Math.round(pi)); // round
console.log(Math.floor(pi)); // floor
console.log(Math.ceil(pi)); // ceil
console.log(Math.random()); // random
console.log(Math.max(1,2,3)); // max

// Type coercion surprises
console.log(1 == "1"); // true, == coerces
console.log(1 === "1"); // false, === strict
console.log(0 == false); // true, oh surprise!
console.log("" == false); // true, another surprise

// Things that surprised me about JavaScript
// 1. == does type coercion, so 0 == false is true
// 2. null == undefined is true but null === undefined false
// 3. NaN == NaN is false, weird!

// Defense Q: == ra === ko difference ke ho? Type coercion bhanne ke ho?
// == compares with type coercion, changes types to match. === strict, no coercion.
// Type coercion means JS automatically converts types, like string to number.