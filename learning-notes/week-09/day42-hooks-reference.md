# React Hooks Cheatsheet - Kiran Panta
*Personal reference for all hooks learned during internship*

## useState
- **Purpose**: Manage state in functional components
- **Syntax**: `const [state, setState] = useState(initialValue)`
- **When to use**: Any data that changes and affects UI
- **Key points**:
  - Always use setter function, never mutate state directly
  - Can hold any type: primitives, objects, arrays
  - Initial value can be a function for expensive calculations
- **Common mistake**: `setState(state + 1)` instead of `setState(prev => prev + 1)`

## useEffect
- **Purpose**: Handle side effects (API calls, subscriptions, DOM manipulation)
- **Syntax**: `useEffect(callback, [dependencies])`
- **When to use**: After render, for async operations, cleanup
- **Dependency array**:
  - `[]` = run once on mount
  - `[var]` = run when var changes
  - No array = run after every render
- **Cleanup**: Return function from useEffect for cleanup
- **Key points**: Always include all dependencies or use useCallback

## useRef
- **Purpose**: Persist values between renders without triggering re-render
- **Syntax**: `const ref = useRef(initialValue)`
- **When to use**: DOM references, storing previous values, timers
- **Key points**:
  - Access value with `ref.current`
  - Changes don't trigger re-render
  - Good for values that change often but don't affect UI
- **Common mistake**: Using for state that should re-render

## useCallback
- **Purpose**: Memoize functions to prevent unnecessary re-renders
- **Syntax**: `const memoizedFn = useCallback(fn, [deps])`
- **When to use**: Passing functions to optimized child components
- **Key points**:
  - Only use when function is passed to React.memo components
  - Include all dependencies in array
  - Don't overuse - adds complexity
- **Performance**: Prevents child re-renders when parent re-renders

## useMemo
- **Purpose**: Memoize expensive calculations
- **Syntax**: `const memoizedValue = useMemo(() => compute(), [deps])`
- **When to use**: Heavy computations, filtering large arrays, complex math
- **Key points**:
  - Only recalculates when dependencies change
  - Return value, not function
  - Don't use for simple operations
- **Performance**: Prevents expensive operations on every render

## Custom Hooks
- **Purpose**: Extract reusable logic from components
- **Naming**: Always start with `use` (useLocalStorage, useApi, etc.)
- **When to use**: Same logic used in multiple components
- **Rules**:
  - Can use other hooks inside
  - Return values/objects, not JSX
  - Follow same rules as regular hooks
- **Examples**:
  - `useLocalStorage(key, initialValue)` - persist to localStorage
  - `useDocumentTitle(title)` - set page title
  - `useToast()` - notification system

## Hook Lifecycle
```
Component Mount:
  → useState initializers run
  → Component renders
  → useEffect with [] runs
  → useLayoutEffect runs (if used)

State Update:
  → Setter called
  → Component re-renders
  → useEffect runs (based on deps)
  → Cleanup functions run before new effects

Component Unmount:
  → All cleanup functions run
```

## Performance Optimization
- **React.memo**: Prevent re-renders of functional components
- **useMemo**: Cache expensive calculations
- **useCallback**: Cache functions for child components
- **Key prop**: Help React identify list items
- **Lazy loading**: Code splitting with React.lazy

## Common Patterns
- **Data fetching**: useEffect + useState + loading/error states
- **Form handling**: useState for values, onChange handlers
- **Local storage**: Custom hook with useState + useEffect
- **API calls**: useState for data, useEffect for fetch, cleanup for abort
- **Timers**: useRef for interval ID, useEffect for setup/cleanup

## Debugging Hooks
- **React DevTools**: Inspect component state and props
- **console.log**: Add to see when effects run
- **React.StrictMode**: Catches common mistakes in development
- **ESLint rules**: eslint-plugin-react-hooks for hook rules

## Best Practices
1. **Always cleanup**: Timers, subscriptions, event listeners
2. **Include dependencies**: Or use useCallback for functions
3. **Don't overuse**: useMemo/useCallback only when needed
4. **Custom hooks**: Extract complex logic
5. **Test hooks**: Use React Testing Library
6. **Consistent naming**: useState, useEffect, etc.

## Interview Questions
- **useState vs useRef**: State triggers re-render, ref doesn't
- **useEffect dependency array**: Controls when effect runs
- **useCallback vs useMemo**: Callback for functions, memo for values
- **Custom hooks**: Reusable logic, must start with 'use'
- **Performance**: When and why to optimize with hooks

*This cheatsheet helped me remember all hooks during defense preparation!*