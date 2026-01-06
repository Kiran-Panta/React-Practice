import { useState } from 'react';

function EventHandling() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // onClick with parameters: use arrow function
  const handleClickWithParam = (param) => {
    console.log('Clicked with param:', param);
  };

  // onSubmit: prevent default
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  // onKeyDown: Enter to submit
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert('Enter pressed');
    }
  };

  // Mouse events
  const handleMouseMove = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  };

  // Focus events
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Keyboard shortcuts
  const handleKeyPress = (e) => {
    if (e.key === 'r') {
      setClickCount(0);
    } else if (e.key === 'h') {
      alert('Help: Press r to reset, h for help');
    }
  };

  return (
    <div className="container my-4" tabIndex={0} onKeyDown={handleKeyPress}>
      <h1>Event Handling Practice</h1>

      {/* onClick */}
      <div className="card p-3 mb-3">
        <h3>onClick</h3>
        <button onClick={() => setClickCount(c => c + 1)}>Clicked {clickCount} times</button>
        <button onClick={() => handleClickWithParam('hello')}>With Param</button>
      </div>

      {/* onChange, onSubmit */}
      <div className="card p-3 mb-3">
        <h3>onChange & onSubmit</h3>
        <form onSubmit={handleSubmit}>
          <input 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            onKeyDown={handleKeyDown}
            placeholder="Type and press Enter"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Mouse events */}
      <div 
        className="card p-3 mb-3" 
        style={{height: '200px', background: isHovered ? 'lightblue' : 'white'}}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3>Mouse Events</h3>
        <p>Mouse position: {mousePos.x}, {mousePos.y}</p>
        <p>Hovered: {isHovered ? 'Yes' : 'No'}</p>
      </div>

      {/* Focus events */}
      <div className="card p-3 mb-3">
        <h3>Focus Events</h3>
        <input 
          style={{borderColor: isFocused ? 'blue' : 'gray'}}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Focus me"
        />
        <p>Focused: {isFocused ? 'Yes' : 'No'}</p>
      </div>

      {/* Keyboard shortcuts */}
      <div className="card p-3">
        <h3>Keyboard Shortcuts</h3>
        <p>Press 'r' to reset counter, 'h' for help</p>
      </div>

      {/* Synthetic events: React's wrapper around native events */}
      {/* event.target vs event.currentTarget: target is clicked element, currentTarget is listener element */}
    </div>
  );
}

export default EventHandling;