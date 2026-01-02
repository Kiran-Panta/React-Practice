import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // useState returns [state, setter]
  const [step, setStep] = useState(1);

  // Never mutate state directly, always use setter
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  // Color based on value
  const color = count > 0 ? 'green' : count < 0 ? 'red' : 'gray';

  return (
    <div className="card p-4 m-2 text-center">
      <h2 style={{color}}>Count: {count}</h2>
      <div>
        <button className="btn btn-primary me-2" onClick={decrement}>-</button>
        <button className="btn btn-primary me-2" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={increment}>+</button>
      </div>
      <div className="mt-3">
        <label>Step: </label>
        <select value={step} onChange={e => setStep(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </div>
  );
}

export default Counter;