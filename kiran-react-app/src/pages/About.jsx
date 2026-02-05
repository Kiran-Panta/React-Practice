import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

function About() {
  // Set document title
  useDocumentTitle('About - Kiran Panta | React Intern');

  return (
    <div className="container my-5">
      {/* h1 for main heading */}
      <h1 className="text-center mb-5">About Kiran Panta</h1>

      {/* Timeline section showing complete internship progress */}
      <section className="mb-5">
        <h2>Complete Internship Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Week 1-2: HTML/CSS Foundations</h4>
            <p>Mastered semantic HTML, CSS layouts, Flexbox, Grid, and responsive design principles</p>
          </div>
          <div className="timeline-item">
            <h4>Week 3: JavaScript Fundamentals</h4>
            <p>Learned variables, functions, arrays, objects, DOM manipulation, and event handling</p>
          </div>
          <div className="timeline-item">
            <h4>Week 4: React Introduction</h4>
            <p>Started with JSX, components, props, Vite setup, and basic React concepts</p>
          </div>
          <div className="timeline-item">
            <h4>Week 5: React State & Events</h4>
            <p>Mastered useState, event handlers, controlled components, and dynamic lists</p>
          </div>
          <div className="timeline-item">
            <h4>Week 6: React Router & APIs</h4>
            <p>Implemented routing, forms, API fetching, and error handling</p>
          </div>
          <div className="timeline-item">
            <h4>Week 7: Advanced React Features</h4>
            <p>Built modals, custom hooks, context, portals, and complex state management</p>
          </div>
          <div className="timeline-item">
            <h4>Week 8: UI Polish & Bootstrap</h4>
            <p>Created professional UI with Bootstrap, animations, accessibility, and user experience</p>
          </div>
          <div className="timeline-item">
            <h4>Week 9: Final Features & Defense Prep</h4>
            <p>Added advanced features, UX improvements, comprehensive testing, and defense preparation</p>
          </div>
        </div>
      </section>

      {/* Internship Stats section */}
      <section className="mb-5">
        <h2>Internship Statistics</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">📅 Duration</h5>
                <p className="card-text">11 weeks (Dec 8, 2025 - Feb 19, 2026)</p>
                <small className="text-muted">Tech Yatra Private Limited</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">🛠️ Technical Skills</h5>
                <p className="card-text">React, JavaScript, HTML5, CSS3, Bootstrap, Tailwind</p>
                <small className="text-muted">Modern web development stack</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">📊 Project Metrics</h5>
                <ul className="list-unstyled mb-0">
                  <li>15+ Components Built</li>
                  <li>6 Main Pages Created</li>
                  <li>45+ Git Commits</li>
                  <li>3 APIs Integrated</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">🎯 Key Features</h5>
                <ul className="list-unstyled mb-0">
                  <li>Routing & Navigation</li>
                  <li>Forms & Validation</li>
                  <li>Modals & Portals</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Progress section */}
      <section className="mb-5">
        <h2>Skills Mastered</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Technical Skills</h4>
            <div className="skill-item mb-3">
              <span>React Fundamentals</span>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{width: '90%'}}>90%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>Advanced React (Hooks/Router)</span>
              <div className="progress">
                <div className="progress-bar bg-success" style={{width: '85%'}}>85%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>JavaScript ES6+</span>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{width: '80%'}}>80%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>HTML5 & CSS3</span>
              <div className="progress">
                <div className="progress-bar bg-info" style={{width: '85%'}}>85%</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Tools & Best Practices</h4>
            <div className="skill-item mb-3">
              <span>Git Version Control</span>
              <div className="progress">
                <div className="progress-bar bg-secondary" style={{width: '75%'}}>75%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>Development Tools (Vite, npm)</span>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{width: '75%'}}>75%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>UI/UX Principles</span>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{width: '80%'}}>80%</div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <span>Problem Solving</span>
              <div className="progress">
                <div className="progress-bar bg-success" style={{width: '85%'}}>85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I enjoyed section */}
      <section className="mb-5">
        <h2>What I Enjoyed Most</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-3">🎨 <strong>Creative Problem Solving:</strong> Every bug was a puzzle to solve, and fixing it felt rewarding</li>
              <li className="mb-3">🚀 <strong>Seeing Code Come Alive:</strong> Watching my components render and interact was magical</li>
              <li className="mb-3">📚 <strong>Continuous Learning:</strong> Every day brought new concepts and deeper understanding</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-3">🤝 <strong>Community Support:</strong> Learning from colleagues and sharing knowledge</li>
              <li className="mb-3">✅ <strong>Achievement Moments:</strong> Completing features and seeing user satisfaction</li>
              <li className="mb-3">🔧 <strong>Tool Mastery:</strong> Becoming proficient with React, Git, and development tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges and Growth section */}
      <section className="mb-5">
        <h2>Challenges & Growth</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Technical Challenges</h4>
            <ul>
              <li><strong>React Hooks:</strong> Understanding useEffect dependencies and cleanup</li>
              <li><strong>Async Programming:</strong> Managing API calls and error states</li>
              <li><strong>CSS Positioning:</strong> Mastering Flexbox and responsive layouts</li>
              <li><strong>State Management:</strong> Choosing between local and global state</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>How I Overcame Them</h4>
            <ul>
              <li><strong>Practice & Documentation:</strong> Built small examples, read React docs thoroughly</li>
              <li><strong>Debugging Skills:</strong> Used console.log, React DevTools, and breakpoints</li>
              <li><strong>Peer Learning:</strong> Asked questions, reviewed colleague code</li>
              <li><strong>Incremental Progress:</strong> Broke complex problems into smaller tasks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Goals section */}
      <section className="mb-5">
        <h2>Future Goals</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">🎯 Short Term</h5>
                <ul className="list-unstyled">
                  <li>Master TypeScript</li>
                  <li>Learn Next.js</li>
                  <li>Contribute to open source</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">🚀 Medium Term</h5>
                <ul className="list-unstyled">
                  <li>Build full-stack apps</li>
                  <li>Learn cloud deployment</li>
                  <li>Join developer community</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">💼 Long Term</h5>
                <ul className="list-unstyled">
                  <li>Become senior developer</li>
                  <li>Mentor junior developers</li>
                  <li>Start own tech projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defense preparation section */}
      <div className="mt-5 p-4 bg-light rounded">
        <h3>🎓 Defense Preparation</h3>
        <p><strong>Q: What was your biggest learning from this React internship?</strong></p>
        <p><em>Answer:</em> The biggest learning was understanding that React is not just about writing code, but about creating maintainable, user-friendly applications. I learned to think in components, manage complex state, handle user interactions gracefully, and write clean, readable code that others can understand and maintain.</p>

        <p><strong>Q: How do you approach debugging a React application?</strong></p>
        <p><em>Answer:</em> I start by checking the browser console for errors, then use React DevTools to inspect component state and props. I add console.log statements strategically, verify useEffect dependencies, and isolate components by testing them individually. For complex issues, I break them down into smaller problems and test each part.</p>

        <p><strong>Q: What would you do differently if you could restart this project?</strong></p>
        <p><em>Answer:</em> I would implement TypeScript from the beginning for better type safety, add comprehensive unit tests, use a component library like Material-UI for consistency, implement proper error boundaries, and focus more on performance optimization from the start.</p>
      </div>
    </div>
  );
}

export default About;