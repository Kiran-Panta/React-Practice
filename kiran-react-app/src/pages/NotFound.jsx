import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {/* Creative 404 illustration with CSS shapes */}
        <div className="error-illustration">
          <div className="error-number">
            <span className="four">4</span>
            <div className="circle"></div>
            <span className="four">4</span>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        {/* Error message */}
        <div className="error-message">
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-description">
            Looks like you've ventured into uncharted territory! The page you're looking for
            seems to have taken a coffee break or gone on an adventure of its own.
          </p>

          <div className="helpful-links">
            <p className="helpful-text">Here are some places you might want to visit instead:</p>
            <div className="link-buttons">
              <Link to="/" className="btn btn-primary btn-lg">
                🏠 Go Home
              </Link>
              <Link to="/portfolio" className="btn btn-outline-primary btn-lg">
                👤 View Portfolio
              </Link>
              <Link to="/contact" className="btn btn-outline-success btn-lg">
                📧 Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Fun facts or tips */}
        <div className="fun-fact">
          <div className="fact-icon">💡</div>
          <p className="fact-text">
            <strong>Fun Fact:</strong> This 404 page was built with React and CSS shapes!
            While you're here, try pressing Ctrl+D to see the demo mode in action.
          </p>
        </div>
      </div>

      <style jsx>{`
        .not-found-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
        }

        .not-found-content {
          text-align: center;
          max-width: 800px;
          position: relative;
        }

        .error-illustration {
          position: relative;
          margin-bottom: 3rem;
        }

        .error-number {
          font-size: clamp(8rem, 20vw, 15rem);
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .four {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.3));
        }

        .circle {
          width: clamp(4rem, 10vw, 8rem);
          height: clamp(4rem, 10vw, 8rem);
          background: radial-gradient(circle, #4ecdc4, #44a08d);
          border-radius: 50%;
          margin: 0 1rem;
          box-shadow: 0 0 30px rgba(78, 205, 196, 0.5);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          top: 10%;
          left: 10%;
          width: 30px;
          height: 30px;
          background: #ffd93d;
          border-radius: 50% 0 50% 50%;
          animation-delay: 0s;
        }

        .shape-2 {
          top: 20%;
          right: 15%;
          width: 20px;
          height: 40px;
          background: #ff6b6b;
          border-radius: 50%;
          animation-delay: 2s;
        }

        .shape-3 {
          bottom: 15%;
          left: 20%;
          width: 35px;
          height: 35px;
          background: #4ecdc4;
          border-radius: 0 50% 50% 50%;
          animation-delay: 4s;
        }

        .shape-4 {
          bottom: 25%;
          right: 10%;
          width: 25px;
          height: 25px;
          background: #a78bfa;
          border-radius: 50% 50% 0 50%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .error-message {
          margin-bottom: 3rem;
        }

        .error-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .error-description {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .helpful-links {
          margin-bottom: 2rem;
        }

        .helpful-text {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .link-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .link-buttons .btn {
          min-width: 140px;
          transition: all 0.3s ease;
        }

        .link-buttons .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .fun-fact {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .fact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .fact-text {
          text-align: left;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .link-buttons {
            flex-direction: column;
            align-items: center;
          }

          .fun-fact {
            flex-direction: column;
            text-align: center;
          }

          .fact-text {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound;