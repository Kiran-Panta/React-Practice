import React, { useState, useEffect } from 'react';
import Modal from './Modal';

// DemoMode component for defense preparation
// This component helps during defense demo by highlighting interactive elements
// Shows a floating banner and help button for better demo experience
function DemoMode({ isActive, onToggle }) {
  const [showHelp, setShowHelp] = useState(false);

  // Add pulsing animation to interactive elements when demo mode is active
  useEffect(() => {
    if (isActive) {
      // Add demo-highlight class to interactive elements
      const interactiveElements = document.querySelectorAll('button, input, select, textarea, a, [role="button"], [tabindex="0"]');
      interactiveElements.forEach(el => {
        el.classList.add('demo-highlight');
      });

      return () => {
        // Cleanup when component unmounts or demo mode turns off
        interactiveElements.forEach(el => {
          el.classList.remove('demo-highlight');
        });
      };
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Floating demo banner */}
      <div className="demo-banner">
        <div className="demo-banner-content">
          <span className="demo-icon">🎓</span>
          <span className="demo-text">Defense Demo Mode — Click anywhere to see features</span>
          <button
            className="demo-close-btn"
            onClick={onToggle}
            aria-label="Exit demo mode"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Floating help button */}
      <button
        className="demo-help-btn"
        onClick={() => setShowHelp(true)}
        aria-label="Show demo help"
      >
        ?
      </button>

      {/* Help modal */}
      <Modal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
        title="Demo Help & Shortcuts"
      >
        <div className="demo-help-content">
          <h5>🎯 App Features Overview</h5>
          <ul>
            <li><strong>Home Page:</strong> Interactive widgets, profile cards, skill animations</li>
            <li><strong>Todo App:</strong> Add/delete tasks, priority levels, filtering, undo feature</li>
            <li><strong>Posts Page:</strong> Search posts, view details, API integration</li>
            <li><strong>Contact Form:</strong> Validation, toast notifications, form submission</li>
            <li><strong>Portfolio:</strong> Professional showcase, certificate, journey timeline</li>
          </ul>

          <h5>⌨️ Keyboard Shortcuts</h5>
          <ul>
            <li><strong>Tab:</strong> Navigate through interactive elements</li>
            <li><strong>Enter/Space:</strong> Activate buttons and links</li>
            <li><strong>Escape:</strong> Close modals and exit forms</li>
            <li><strong>Arrow Keys:</strong> Navigate in galleries and lists</li>
          </ul>

          <h5>🖱️ Interactive Elements</h5>
          <p>Elements with pulsing rings are interactive. Try clicking:</p>
          <ul>
            <li>Navigation menu items</li>
            <li>Form inputs and buttons</li>
            <li>Todo app controls</li>
            <li>Image gallery items</li>
            <li>Widget interactions</li>
          </ul>

          <h5>💡 Demo Tips</h5>
          <ul>
            <li>Start with Home page to show overall app</li>
            <li>Demonstrate Todo app functionality</li>
            <li>Show Posts page with search</li>
            <li>Test Contact form validation</li>
            <li>End with Portfolio showcase</li>
          </ul>
        </div>
      </Modal>

      <style jsx>{`
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
          padding: 8px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .demo-banner-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .demo-icon {
          font-size: 1.2rem;
        }

        .demo-text {
          font-weight: 500;
          font-size: 0.9rem;
        }

        .demo-close-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          transition: background-color 0.2s;
        }

        .demo-close-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        .demo-help-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #007bff;
          color: white;
          border: none;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,123,255,0.3);
          z-index: 9998;
          transition: all 0.2s;
        }

        .demo-help-btn:hover {
          background: #0056b3;
          transform: scale(1.1);
        }

        .demo-highlight {
          position: relative;
        }

        .demo-highlight::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid #ff6b6b;
          border-radius: 4px;
          animation: demo-pulse 2s infinite;
          pointer-events: none;
          z-index: 9997;
        }

        @keyframes demo-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }

        .demo-help-content h5 {
          color: #007bff;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .demo-help-content h5:first-child {
          margin-top: 0;
        }

        .demo-help-content ul {
          margin-bottom: 1rem;
        }

        .demo-help-content li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </>
  );
}

export default DemoMode;

// Defense Questions:
// Q: Defense demo garda ke ke important chha?
// A: Demo mode le interactive elements highlight garchha, help button le shortcuts dekhauchha, banner le demo mode active cha bhanncha. Examiner le easily features dekhna sakchha, time save hunchha, sabai functionality clear bhayera defense strong hunchha.