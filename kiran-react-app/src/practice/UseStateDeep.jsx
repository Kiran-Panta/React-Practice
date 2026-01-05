import { useState } from 'react';

function UseStateDeep() {
  // 1. Counter with step control
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // 2. Theme switcher
  const [theme, setTheme] = useState('light');

  // 3. Accordion - state holds which index is open
  const [openIndex, setOpenIndex] = useState(null);

  // 4. Multi-step form - state tracks current step and form values
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  // useState with object: update one field using spread
  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // useState with array: add/remove immutably
  const [items, setItems] = useState(['item1']);
  const addItem = () => setItems(prev => [...prev, `item${prev.length + 1}`]);
  const removeItem = (index) => setItems(prev => prev.filter((_, i) => i !== index));

  return (
    <div className="container my-4">
      <h1>useState Deep Practice</h1>

      {/* Counter */}
      <div className="card p-3 mb-3">
        <h3>Counter with Step</h3>
        <p>Count: {count}</p>
        <input type="number" value={step} onChange={e => setStep(Number(e.target.value))} />
        <button onClick={() => setCount(c => c + step)}>+</button>
        <button onClick={() => setCount(c => c - step)}>-</button>
      </div>

      {/* Theme */}
      <div className={`card p-3 mb-3 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
        <h3>Theme Switcher</h3>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      </div>

      {/* Accordion */}
      <div className="card p-3 mb-3">
        <h3>Accordion</h3>
        {[1,2,3].map(i => (
          <div key={i}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              Section {i}
            </button>
            {openIndex === i && <p>Content for section {i}</p>}
          </div>
        ))}
      </div>

      {/* Multi-step form */}
      <div className="card p-3 mb-3">
        <h3>Multi-step Form - Step {currentStep}</h3>
        {currentStep === 1 && (
          <div>
            <input placeholder="Name" value={formData.name} onChange={e => updateForm('name', e.target.value)} />
            <button onClick={() => setCurrentStep(2)}>Next</button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <input placeholder="Email" value={formData.email} onChange={e => updateForm('email', e.target.value)} />
            <button onClick={() => setCurrentStep(1)}>Back</button>
            <button onClick={() => setCurrentStep(3)}>Next</button>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <button onClick={() => setCurrentStep(2)}>Back</button>
          </div>
        )}
      </div>

      {/* Array example */}
      <div className="card p-3">
        <h3>Array State</h3>
        <ul>{items.map((item, i) => <li key={i}>{item} <button onClick={() => removeItem(i)}>Remove</button></li>)}</ul>
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Defense Q: State update async chha bhane immediate value kasari linchau? */}
      {/* Use functional update: setCount(prev => prev + 1) to get latest value */}
    </div>
  );
}

export default UseStateDeep;