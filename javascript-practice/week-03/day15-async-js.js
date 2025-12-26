// Asynchronous JavaScript Practice - Day 15

// Synchronous vs Asynchronous
// Sync: one thing at a time, blocks
console.log("Start");
setTimeout(() => console.log("Async"), 1000); // Async: doesn't block
console.log("End");
// Output: Start, End, Async

// Callbacks and callback hell
function getData(callback) {
    setTimeout(() => {
        callback("Data");
    }, 1000);
}

getData(data => {
    console.log(data);
    getData(data2 => {
        console.log(data2);
        // This nesting is callback hell!
    });
});

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise data"), 1000);
});

promise
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log("Done"));

// Promise.all and Promise.race
const p1 = Promise.resolve("Fast");
const p2 = new Promise(r => setTimeout(() => r("Slow"), 2000));

Promise.all([p1, p2]).then(results => console.log("All:", results)); // waits for all
Promise.race([p1, p2]).then(result => console.log("Race:", result)); // first one

// Async/await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();

// Mental model: Async JS = ordering food at restaurant — you don't stand waiting, you get a token (Promise) and sit down.

// Defense Q: async/await ra callback ko difference ke ho? Promise chain kasari kaam garchha?
// async/await is syntactic sugar over Promises, makes async code look sync. Callbacks are functions passed to handle result.
// Promise chain: .then() returns new Promise, so chainable.