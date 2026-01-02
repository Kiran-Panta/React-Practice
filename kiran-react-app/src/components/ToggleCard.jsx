import { useState } from 'react';

function ToggleCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false); // toggle state

  return (
    <div className="card p-4 m-2" onClick={() => setIsFlipped(!isFlipped)} style={{cursor: 'pointer'}}>
      {isFlipped ? (
        <div>
          <h4>Answer:</h4>
          <p>{answer}</p>
        </div>
      ) : (
        <div>
          <h4>Question:</h4>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
}

export default ToggleCard;