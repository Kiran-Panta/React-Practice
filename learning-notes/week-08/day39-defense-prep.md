# Defense Preparation - Kiran Panta
*Hey panel, my name is Kiran Panta, React intern at Tech Yatra. I am nervous but excited to show you what I learned in 11 weeks. I will explain my code and answer your questions in simple way.*

## HTML/CSS Questions

### Q1: HTML semantic elements ko importance ke ho? Why use `<header>`, `<main>`, `<footer>` instead of just `<div>`?
**Answer:** Semantic elements give meaning to content, not just styling. Screen readers use them for navigation, SEO bots understand page structure better. `<header>` is for page/site header, `<main>` for main content, `<footer>` for footer. This makes code accessible and SEO-friendly. Without semantics, everything is just boxes with no meaning.

### Q2: CSS Box Model bhanne ke ho? Margin, border, padding ko difference ke ho?
**Answer:** Box model is how browser calculates element size. Every element is a box with:
- **Content**: actual text/image inside
- **Padding**: space between content and border (inside element)
- **Border**: line around padding
- **Margin**: space outside border (between elements)

Total width = content + padding-left/right + border-left/right + margin-left/right

### Q3: Flexbox vs CSS Grid ko difference ke ho? When to use which?
**Answer:** Flexbox is for 1D layouts (row or column), Grid is for 2D layouts (rows AND columns).
- Use Flexbox for: navigation bars, card layouts, centering items
- Use Grid for: complex page layouts, magazine-style designs, when you need both row and column control

## JavaScript Questions

### Q4: `var`, `let`, `const` ko difference ke ho? When to use which?
**Answer:**
- `var`: function-scoped, can be redeclared, hoisted (old way)
- `let`: block-scoped, can be reassigned but not redeclared
- `const`: block-scoped, cannot be reassigned, use for constants

Use `const` by default, `let` when you need to reassign, avoid `var`.

### Q5: Closures bhanne ke ho? Real example dinu paryo.
**Answer:** Closure is when inner function remembers variables from outer function even after outer function finishes.

```javascript
function counter() {
    let count = 0; // outer variable
    return function() { // inner function (closure)
        count++; // remembers 'count' from outer scope
        return count;
    }
}
const myCounter = counter(); // returns inner function
myCounter(); // 1
myCounter(); // 2
```

Used in React for custom hooks, event handlers, data privacy.

### Q6: Asynchronous JavaScript ko concepts ke ho? Promises vs async/await?
**Answer:** Async JS handles operations that take time (API calls, file reading).
- **Callbacks**: old way, leads to "callback hell"
- **Promises**: better, has .then() and .catch()
- **async/await**: modern syntax, makes async code look synchronous

```javascript
// Promise
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// async/await
async function getData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

### Q7: Event bubbling vs event capturing bhanne ke ho?
**Answer:** When event happens on nested elements:
- **Bubbling** (default): event bubbles up from target to root
- **Capturing**: event trickles down from root to target

```javascript
// Bubbling (false/third param)
child.addEventListener('click', handler, false);

// Capturing (true)
child.addEventListener('click', handler, true);
```

## React Basics Questions

### Q8: React ko main concepts ke ho? Why use React instead of vanilla JS?
**Answer:** React is library for building UIs with components.
Main concepts:
- **Components**: reusable UI pieces
- **JSX**: HTML in JavaScript
- **State**: data that changes
- **Props**: data passed to components
- **Virtual DOM**: fast updates

Why React: component reusability, declarative UI, performance with Virtual DOM, large ecosystem.

### Q9: Props vs State ko difference ke ho?
**Answer:**
- **Props**: data passed from parent to child, read-only
- **State**: internal component data, can change with setState/useState

Props for configuration, state for interactivity.

### Q10: React lifecycle methods ko types ke ho? (Class components)
**Answer:**
- **Mounting**: constructor → render → componentDidMount
- **Updating**: render → componentDidUpdate
- **Unmounting**: componentWillUnmount

Now we use hooks instead of lifecycle methods.

### Q11: Keys in React lists kasari kaam garchhan? Why important?
**Answer:** Keys help React identify which items changed, added, or removed. Should be unique and stable.

```javascript
// Good
items.map(item => <li key={item.id}>{item.name}</li>)

// Bad (uses index)
items.map((item, index) => <li key={index}>{item.name}</li>)
```

Without keys, React re-renders everything unnecessarily.

## React Hooks Questions

### Q12: useState hook kasari use garchha? Example dinu paryo.
**Answer:** useState manages state in functional components.

```javascript
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // [state, setter]

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```

### Q13: useEffect hook ko purpose ke ho? Dependency array ko role ke ho?
**Answer:** useEffect runs side effects (API calls, subscriptions, DOM manipulation).

```javascript
useEffect(() => {
    // runs after render
    document.title = `Count: ${count}`;

    return () => {
        // cleanup function
    };
}, [count]); // dependency array - only runs when count changes

// Empty array [] = runs once on mount
// No array = runs after every render
```

### Q14: Custom hooks kasari banau? Why use them?
**Answer:** Custom hooks extract reusable logic.

```javascript
// useLocalStorage hook
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue];
}
```

Benefits: reusability, separation of concerns, testing easier.

### Q15: useRef vs useState ko difference ke ho?
**Answer:**
- **useState**: triggers re-render when changed
- **useRef**: doesn't trigger re-render, persists between renders

Use useRef for: DOM references, storing mutable values that don't need re-render.

## React Router Questions

### Q16: React Router ko basic setup kasari garchha?
**Answer:**
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}
```

### Q17: Dynamic routing kasari garchha? useParams ko use kasari?
**Answer:** useParams gets URL parameters.

```javascript
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams(); // gets :id from URL
    return <h1>User ID: {id}</h1>;
}

// URL: /users/123 → id = "123"
```

### Q18: Programmatic navigation kasari garchha? useNavigate ko use.
**Answer:** useNavigate for redirecting after actions.

```javascript
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // login logic
        navigate('/dashboard'); // redirect after login
    };
}
```

## Tailwind CSS Questions

### Q19: Tailwind CSS ke ho? Why use instead of normal CSS?
**Answer:** Tailwind is utility-first CSS framework. Instead of custom classes, use utility classes directly in HTML.

```html
<!-- Instead of custom CSS -->
<div class="card">...</div>

<!-- Use utilities -->
<div class="bg-white rounded-lg shadow-md p-4">...</div>
```

Benefits: faster development, consistent design, smaller CSS bundle, responsive utilities.

### Q20: Tailwind responsive design kasari garchha?
**Answer:** Use breakpoint prefixes: sm:, md:, lg:, xl:, 2xl:

```html
<div class="text-sm md:text-base lg:text-lg">
    <!-- small screens: text-sm -->
    <!-- medium+: text-base -->
    <!-- large+: text-lg -->
</div>
```

## Bootstrap Questions

### Q21: Bootstrap grid system kasari kaam garchha?
**Answer:** Bootstrap uses 12-column grid with breakpoints.

```html
<div class="container">
    <div class="row">
        <div class="col-md-8">Main content</div>
        <div class="col-md-4">Sidebar</div>
    </div>
</div>
```

- `col-` : mobile first (always)
- `col-sm-` : ≥576px
- `col-md-` : ≥768px
- `col-lg-` : ≥992px
- `col-xl-` : ≥1200px

### Q22: Bootstrap components ma data-bs-toggle ra data-bs-target kasari kaam garchha?
**Answer:** Bootstrap uses data attributes for JavaScript behavior.

```html
<!-- Button that toggles modal -->
<button data-bs-toggle="modal" data-bs-target="#myModal">
    Open Modal
</button>

<!-- Modal -->
<div id="myModal" class="modal">...</div>
```

Bootstrap's JS reads these attributes and adds click handlers automatically. Without JS, buttons do nothing.

## Project-Specific Questions

### Q23: Todo App ko architecture explain garna.
**Answer:** Todo App uses:
- **useState** for todos array and filter state
- **localStorage** for persistence
- **Components**: TodoList, TodoItem, TodoForm, FilterButtons
- **Features**: add, delete, toggle complete, filter by status, priority levels

### Q24: API integration Posts app ma kasari gareko?
**Answer:** Used JSONPlaceholder API with:
- **useEffect** for initial fetch
- **useState** for loading/error states
- **React Router** for individual post pages
- **Error boundaries** for graceful error handling

### Q25: What was hardest to build? Why?
**Answer:** Modal component was hardest because:
- Portal implementation (render outside DOM tree)
- Focus management and accessibility
- Keyboard navigation (Escape to close)
- Preventing body scroll
- Z-index management

### Q26: What would you add if given more time?
**Answer:** Would add:
- User authentication
- Real backend with database
- Unit tests with Jest/React Testing Library
- TypeScript for type safety
- PWA features (offline, notifications)
- Dark mode toggle
- More advanced animations
- Admin panel for content management

---

*Thank you panel for this opportunity. I learned so much about React, modern web development, and professional coding practices. I am ready to contribute to real projects now.*