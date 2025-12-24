// Arrays and Objects Practice - Day 13

// Arrays
let arr = [1,2,3];
let spread = [...arr, 4,5]; // spread operator
console.log(spread);

// Destructuring
let [first, second] = arr;
console.log(first, second);

// Array methods
arr.push(4); // add end
arr.pop(); // remove end
arr.shift(); // remove start
arr.unshift(0); // add start
console.log(arr.splice(1,2)); // remove from index
console.log(arr.slice(0,2)); // copy part
console.log(arr.map(x => x*2)); // transform
console.log(arr.filter(x => x > 1)); // filter
console.log(arr.reduce((a,b) => a+b, 0)); // reduce
console.log(arr.find(x => x > 2)); // find first
console.log(arr.findIndex(x => x > 2)); // find index
console.log(arr.every(x => x > 0)); // all true
console.log(arr.some(x => x > 2)); // some true
console.log([1,[2,3]].flat()); // flatten
console.log(arr.flatMap(x => [x, x*2])); // map then flat

// Objects
let obj = {name: "Kiran", age: 20};
let spreadObj = {...obj, city: "Kathmandu"}; // spread
console.log(spreadObj);

// Destructuring
let {name, age} = obj;
let {name: fullName = "Unknown"} = obj; // rename and default
console.log(name, age, fullName);

// Computed property
let key = "hobby";
let obj2 = {[key]: "coding"};
console.log(obj2);

// Object methods
console.log(Object.keys(obj)); // keys
console.log(Object.values(obj)); // values
console.log(Object.entries(obj)); // entries

// Assign vs spread
let assign = Object.assign({}, obj, {new: true}); // assign
let spreaded = {...obj, new: true}; // spread
console.log(assign, spreaded);

// Shallow vs deep copy
let nested = {a: {b: 1}};
let shallow = {...nested}; // shallow
shallow.a.b = 2; // changes original!
console.log(nested.a.b); // 2, oh no!

// Deep copy solution: JSON.parse(JSON.stringify(obj))

// Mini example: student grades
let students = [
    {name: "A", grade: 85},
    {name: "B", grade: 92},
    {name: "C", grade: 78}
];

let averages = students.map(s => s.grade).reduce((a,b) => a+b, 0) / students.length;
let top = students.reduce((prev, curr) => curr.grade > prev.grade ? curr : prev);
let passing = students.filter(s => s.grade >= 80);

console.log(averages, top, passing);

// Defense Q: Shallow copy ra deep copy ko difference ke ho? Kasari solve garchau?
// Shallow copy copies only top level, nested objects share reference. Deep copy copies everything.
// Solve with JSON.parse(JSON.stringify(obj)) or libraries like lodash.