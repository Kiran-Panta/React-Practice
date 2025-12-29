# React Introduction Notes - Day 16

React solves the problem of manual DOM updates. Before React, for large apps, every change meant finding elements and updating manually — very painful and error-prone.

A component is a reusable piece of UI, like a LEGO brick. You build small components and combine them.

JSX looks like HTML but is JavaScript. Babel converts it to React.createElement calls.

Virtual DOM is a lightweight copy of real DOM. React compares it to find minimum changes, then updates real DOM efficiently.

## React vs Vanilla JS Comparison

Vanilla JS counter:
```js
let count = 0;
const counterEl = document.getElementById('counter');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
});
```
Many lines, manual DOM manipulation.

React counter:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
Few lines, declarative.

What clicked: JSX is cool, like writing HTML in JS. Still confusing: Virtual DOM concept, but I think I get it.

## Defense Q: Virtual DOM bhanne ke ho? Real DOM bata kasari different chha ra kina faster chha?

Virtual DOM is JavaScript object representing DOM. React diffs it with real DOM to find changes, then updates only what's needed. Faster because batching updates and efficient diffing.