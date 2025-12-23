// JavaScript Functions Practice - Day 12

// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function(a, b) {
    return a - b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(add(1,2), subtract(3,1), multiply(2,3));

// Pure function: no side effects
function pureAdd(a, b) {
    return a + b; // only returns, no console.log or global change
}

// Higher-order functions from scratch
function myMap(arr, func) {
    let result = [];
    for (let item of arr) {
        result.push(func(item));
    }
    return result;
}

function myFilter(arr, func) {
    let result = [];
    for (let item of arr) {
        if (func(item)) result.push(item);
    }
    return result;
}

function myReduce(arr, func, initial) {
    let acc = initial;
    for (let item of arr) {
        acc = func(acc, item);
    }
    return acc;
}

console.log(myMap([1,2,3], x => x*2)); // [2,4,6]
console.log(myFilter([1,2,3,4], x => x%2 === 0)); // [2,4]
console.log(myReduce([1,2,3], (a,b) => a+b, 0)); // 6

// Closures: function with backpack of variables
function createCounter() {
    let count = 0; // private variable
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// Closure bhanne like a backpack — function le afno scope ko variables sanga saath lanchha.

// IIFE: immediately invoked
(function() {
    console.log("IIFE ran immediately");
})();

// Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(factorial(5)); // 120
console.log(fibonacci(6)); // 8

// Defense Q: Closure bhanne ke ho? Real example dinus.
// Closure is when a function remembers variables from its outer scope even after outer function finishes.
// Example: counter function above, count variable persists.