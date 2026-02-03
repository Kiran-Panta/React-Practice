import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const HooksComparison = () => {
    // State to track which hook examples are visible
    const [visibleExamples, setVisibleExamples] = useState({});

    // Toggle example visibility
    const toggleExample = (hookName) => {
        setVisibleExamples(prev => ({
            ...prev,
            [hookName]: !prev[hookName]
        }));
    };

    // Hook definitions with examples
    const hooksData = [
        {
            name: 'useState',
            color: 'primary',
            description: 'Manages state in functional components',
            whenToUse: 'When component needs to remember data that changes over time',
            example: `const [count, setCount] = useState(0);
// count is the current state value
// setCount is the function to update it
// 0 is the initial value`,
            workingExample: useStateExample,
            commonMistake: 'Calling setState inside render (causes infinite loop)',
            fix: 'Move setState calls to event handlers or useEffect'
        },
        {
            name: 'useEffect',
            color: 'success',
            description: 'Runs side effects after render',
            whenToUse: 'For API calls, subscriptions, DOM manipulation, timers',
            example: `useEffect(() => {
    // Code runs after every render
    document.title = \`Count: \${count}\`;
}, [count]); // Only when count changes`,
            workingExample: useEffectExample,
            commonMistake: 'Missing dependency array (runs too often)',
            fix: 'Add all dependencies or use useCallback for functions'
        },
        {
            name: 'useRef',
            color: 'warning',
            description: 'Persists values between renders without triggering re-render',
            whenToUse: 'DOM references, storing mutable values, previous state values',
            example: `const inputRef = useRef(null);
// Access DOM element: inputRef.current
// Store previous value without re-render`,
            workingExample: useRefExample,
            commonMistake: 'Using useRef for state that should trigger re-render',
            fix: 'Use useState for values that need re-render on change'
        },
        {
            name: 'useCallback',
            color: 'info',
            description: 'Memoizes functions to prevent unnecessary re-renders',
            whenToUse: 'When passing functions to optimized child components',
            example: `const handleClick = useCallback(() => {
    setCount(count + 1);
}, [count]); // Only recreates when count changes`,
            workingExample: useCallbackExample,
            commonMistake: 'Overusing useCallback (adds complexity)',
            fix: 'Only use when function is passed to memoized components'
        },
        {
            name: 'useMemo',
            color: 'secondary',
            description: 'Memoizes expensive calculations',
            whenToUse: 'For expensive computations that don't need to run every render',
            example: `const expensiveValue = useMemo(() => {
    return numbers.reduce((sum, num) => sum + num, 0);
}, [numbers]); // Only recalculates when numbers change`,
            workingExample: useMemoExample,
            commonMistake: 'Using useMemo for simple calculations',
            fix: 'Only use for truly expensive operations'
        },
        {
            name: 'Custom Hooks',
            color: 'dark',
            description: 'Extract reusable logic into custom hooks',
            whenToUse: 'When same logic is used in multiple components',
            example: `function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    // ... rest of hook logic
    return [value, setValue];
}`,
            workingExample: customHookExample,
            commonMistake: 'Creating custom hooks for one-time logic',
            fix: 'Only extract when logic is reused across components'
        }
    ];

    return (
        <div className="hooks-comparison container my-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">React Hooks Reference</h1>
                <p className="lead text-muted">
                    Complete guide to all hooks used during internship - click to see working examples
                </p>
            </div>

            <div className="row">
                {hooksData.map((hook) => (
                    <div key={hook.name} className="col-lg-6 mb-4">
                        <div className={`card border-${hook.color} h-100`}>
                            <div className={`card-header bg-${hook.color} text-white`}>
                                <h4 className="card-title mb-0">
                                    <i className="bi bi-code-slash me-2"></i>
                                    {hook.name}
                                </h4>
                            </div>

                            <div className="card-body">
                                <p className="card-text fw-semibold">{hook.description}</p>

                                <div className="mb-3">
                                    <strong>When to use:</strong>
                                    <p className="text-muted small">{hook.whenToUse}</p>
                                </div>

                                <div className="mb-3">
                                    <strong>Example:</strong>
                                    <pre className="bg-light p-2 rounded small">
                                        <code>{hook.example}</code>
                                    </pre>
                                </div>

                                <div className="mb-3">
                                    <strong>Common Mistake:</strong>
                                    <p className="text-danger small">{hook.commonMistake}</p>
                                    <strong>Fix:</strong>
                                    <p className="text-success small">{hook.fix}</p>
                                </div>

                                <button
                                    className={`btn btn-${hook.color} btn-sm`}
                                    onClick={() => toggleExample(hook.name)}
                                >
                                    {visibleExamples[hook.name] ? 'Hide' : 'Show'} Working Example
                                </button>
                            </div>

                            {visibleExamples[hook.name] && (
                                <div className="card-footer bg-light">
                                    <hook.workingExample />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <div className="alert alert-info">
                    <h5>Defense Q: useCallback ra useMemo ko difference ke ho? Kuna situation ma kuna use garchau?</h5>
                    <p className="mb-0">
                        <strong>useCallback:</strong> Functions lai memoize garchha, prevent unnecessary re-renders when passing functions to child components.<br/>
                        <strong>useMemo:</strong> Expensive calculations lai memoize garchha, prevent unnecessary computation on every render.<br/>
                        <strong>When to use:</strong> useCallback when function is passed to React.memo components, useMemo for heavy calculations like filtering large arrays or complex math.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Working examples for each hook

function useStateExample() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-3 border rounded">
            <p>Count: <strong>{count}</strong></p>
            <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}

function useEffectExample() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(`Count changed to ${count}!`);
        const timer = setTimeout(() => setMessage(''), 2000);
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="p-3 border rounded">
            <p>Count: <strong>{count}</strong></p>
            <button
                className="btn btn-success btn-sm me-2"
                onClick={() => setCount(count + 1)}
            >
                Change Count
            </button>
            {message && <p className="text-success small mt-2">{message}</p>}
        </div>
    );
}

function useRefExample() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const previousValueRef = useRef('');

    const handleSubmit = () => {
        previousValueRef.current = inputValue;
        inputRef.current.focus();
    };

    return (
        <div className="p-3 border rounded">
            <input
                ref={inputRef}
                type="text"
                className="form-control mb-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
            <button
                className="btn btn-warning btn-sm me-2"
                onClick={handleSubmit}
            >
                Submit & Focus
            </button>
            <p className="small text-muted mt-2">
                Previous value: <strong>{previousValueRef.current}</strong>
            </p>
        </div>
    );
}

function useCallbackExample() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // This function is memoized - only recreates when count changes
    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div className="p-3 border rounded">
            <p>Count: <strong>{count}</strong> | Other: <strong>{otherCount}</strong></p>
            <button
                className="btn btn-info btn-sm me-2"
                onClick={incrementCount}
            >
                Increment Count
            </button>
            <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setOtherCount(otherCount + 1)}
            >
                Increment Other
            </button>
            <p className="small text-muted mt-2">
                useCallback prevents incrementCount from being recreated unnecessarily
            </p>
        </div>
    );
}

function useMemoExample() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [multiplier, setMultiplier] = useState(1);

    // Expensive calculation - memoized
    const sum = useMemo(() => {
        console.log('Calculating sum...');
        return numbers.reduce((acc, num) => acc + num, 0) * multiplier;
    }, [numbers, multiplier]);

    const addNumber = () => {
        setNumbers([...numbers, numbers.length + 1]);
    };

    return (
        <div className="p-3 border rounded">
            <p>Numbers: [{numbers.join(', ')}]</p>
            <p>Sum × {multiplier} = <strong>{sum}</strong></p>
            <button
                className="btn btn-secondary btn-sm me-2"
                onClick={addNumber}
            >
                Add Number
            </button>
            <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={() => setMultiplier(multiplier + 1)}
            >
                Increase Multiplier
            </button>
            <p className="small text-muted mt-2">
                Check console - sum only recalculates when numbers or multiplier change
            </p>
        </div>
    );
}

function customHookExample() {
    // This would normally be in a separate file
    const useLocalStorage = (key, initialValue) => {
        const [value, setValue] = useState(() => {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        });

        const setStoredValue = (newValue) => {
            setValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        };

        return [value, setStoredValue];
    };

    const [name, setName] = useLocalStorage('customHookName', 'Kiran');

    return (
        <div className="p-3 border rounded">
            <p>Name: <strong>{name}</strong></p>
            <input
                type="text"
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name..."
            />
            <p className="small text-muted">
                Name persists in localStorage - refresh page to see!
            </p>
        </div>
    );
}

export default HooksComparison;