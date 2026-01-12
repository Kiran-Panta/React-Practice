import React from 'react';

function About() {
  return (
    <div className="container my-5">
      {/* h1 for main heading */}
      <h1 className="text-center mb-5">About Kiran Panta</h1>

      {/* Timeline section showing internship progress */}
      <section className="mb-5">
        <h2>Internship Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Week 1: HTML/CSS Basics</h4>
            <p>Learned basic HTML structure and CSS styling</p>
          </div>
          <div className="timeline-item">
            <h4>Week 2: Advanced CSS</h4>
            <p>Mastered Flexbox, Grid, and responsive design</p>
          </div>
          <div className="timeline-item">
            <h4>Week 3: JavaScript Fundamentals</h4>
            <p>Learned JS basics, functions, arrays, and DOM manipulation</p>
          </div>
          <div className="timeline-item">
            <h4>Week 4: React Introduction</h4>
            <p>Started with React components, JSX, and Vite setup</p>
          </div>
          <div className="timeline-item">
            <h4>Week 5: React State Management</h4>
            <p>Learned useState, events, controlled inputs, and lists</p>
          </div>
          <div className="timeline-item">
            <h4>Week 6: React Router & APIs</h4>
            <p>Implementing routing, forms, and API fetching</p>
          </div>
        </div>
      </section>

      {/* Skills section with progress bars */}
      <section className="mb-5">
        <h2>Skills Gained</h2>
        <div className="skill-item">
          <span>HTML</span>
          <div className="progress">
            <div className="progress-bar" style={{width: '90%'}}>90%</div>
          </div>
        </div>
        <div className="skill-item">
          <span>CSS</span>
          <div className="progress">
            <div className="progress-bar" style={{width: '85%'}}>85%</div>
          </div>
        </div>
        <div className="skill-item">
          <span>JavaScript</span>
          <div className="progress">
            <div className="progress-bar" style={{width: '75%'}}>75%</div>
          </div>
        </div>
        <div className="skill-item">
          <span>React</span>
          <div className="progress">
            <div className="progress-bar" style={{width: '60%'}}>60%</div>
          </div>
        </div>
      </section>

      {/* What I enjoyed section */}
      <section className="mb-5">
        <h2>What I Enjoyed</h2>
        <ul>
          <li>Seeing my code come to life on the screen - it's magical!</li>
          <li>Solving problems step by step, like a puzzle</li>
          <li>Learning new things every day keeps me motivated</li>
        </ul>
      </section>

      {/* Challenges section */}
      <section>
        <h2>Challenges Faced</h2>
        <p>Understanding React hooks was tricky at first, but practice helped.</p>
        <p>CSS positioning sometimes confused me, but Flexbox made it easier.</p>
      </section>

      {/* Defense question */}
      <div className="mt-5 p-3 bg-light">
        <strong>Defense Q: React Router ma nested routes bhanne ke ho?</strong>
        <p>Nested routes allow you to render child components inside parent routes, creating hierarchical navigation. For example, /posts/:id/comments could show comments for a specific post.</p>
      </div>
    </div>
  );
}

export default About;