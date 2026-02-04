import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/features/ImageGallery';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Portfolio() {
  // Set document title
  useDocumentTitle('Portfolio - Kiran Panta | React Intern');

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.progress-bar');
            bars.forEach((bar, index) => {
              // Get the target width from data attribute
              const targetWidth = bar.getAttribute('data-width');
              setTimeout(() => {
                bar.style.width = targetWidth;
              }, index * 200);
            });
            // Disconnect after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section text-center py-5" style={{
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Kiran Panta</h1>
          <p className="lead mb-4">React Web Intern @ Tech Yatra Private Limited</p>
          <div className="mb-4">
            <Link to="/todo" className="btn btn-light btn-lg me-3">View Todo App</Link>
            <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Skills & Expertise</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>Technical Skills</h4>
              <div className="skill-item mb-3">
                <span>React</span>
                <div className="progress">
                  <div className="progress-bar bg-primary" data-width="70%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>70%</div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <span>JavaScript</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" data-width="75%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>75%</div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <span>HTML/CSS</span>
                <div className="progress">
                  <div className="progress-bar bg-success" data-width="85%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>85%</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Soft Skills</h4>
              <div className="skill-item mb-3">
                <span>Problem Solving</span>
                <div className="progress">
                  <div className="progress-bar bg-info" data-width="80%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>80%</div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <span>Communication</span>
                <div className="progress">
                  <div className="progress-bar bg-secondary" data-width="75%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>75%</div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <span>Team Work</span>
                <div className="progress">
                  <div className="progress-bar bg-dark" data-width="85%" style={{width: '0%', transition: 'width 1s ease-in-out'}}>85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">Todo App</h5>
                  <p className="card-text">A comprehensive task management app with priority levels, filtering, and local storage persistence.</p>
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-warning me-1">useState</span>
                    <span className="badge bg-success">LocalStorage</span>
                  </div>
                  <Link to="/todo" className="btn btn-primary">View Project</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">Posts App</h5>
                  <p className="card-text">Dynamic blog posts viewer with React Router navigation and API integration.</p>
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React Router</span>
                    <span className="badge bg-info me-1">API</span>
                    <span className="badge bg-secondary">useParams</span>
                  </div>
                  <Link to="/posts" className="btn btn-primary">View Project</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">Weather Widget</h5>
                  <p className="card-text">Real-time weather display for Kathmandu with caching and condition-based styling.</p>
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">API</span>
                    <span className="badge bg-warning me-1">useRef</span>
                    <span className="badge bg-success">useEffect</span>
                  </div>
                  <button className="btn btn-primary" disabled>View on Home</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <ImageGallery />
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Internship Experience</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Tech Yatra Private Limited</h5>
                  <p className="card-text"><strong>Position:</strong> React Web Intern</p>
                  <p className="card-text"><strong>Duration:</strong> December 2025 - January 2026</p>
                  <p className="card-text"><strong>Supervisor:</strong> Senior React Developer</p>
                  <p className="card-text mt-3">
                    During my internship, I learned modern web development practices, built multiple React applications,
                    and gained experience with version control, API integration, and responsive design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Certificate Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Internship Certificate</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="card shadow-lg border-0" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
                <div className="card-body p-4 p-md-5 text-center">
                  <div className="mb-4">
                    <h3 className="display-6 fw-bold mb-3" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>Certificate of Completion</h3>
                    <div className="border-bottom border-white opacity-50 mb-4"></div>
                  </div>

                  <div className="mb-4">
                    <p className="lead mb-2" style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)'}}>This is to certify that</p>
                    <h4 className="display-5 fw-bold mb-3" style={{fontSize: 'clamp(1.8rem, 5vw, 3rem)'}}>Kiran Panta</h4>
                    <p className="lead mb-4" style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)'}}>has successfully completed</p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{fontSize: 'clamp(1.1rem, 3vw, 1.5rem)'}}>React Web Development Internship</h5>
                    <p className="mb-2" style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)'}}>at</p>
                    <h5 className="fw-bold" style={{fontSize: 'clamp(1.1rem, 3vw, 1.5rem)'}}>Tech Yatra Private Limited</h5>
                  </div>

                  <div className="row text-center mb-4">
                    <div className="col-6 col-md-6">
                      <p className="mb-1 fw-bold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Start Date:</p>
                      <p style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>December 8, 2025</p>
                    </div>
                    <div className="col-6 col-md-6">
                      <p className="mb-1 fw-bold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>End Date:</p>
                      <p style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>February 19, 2026</p>
                    </div>
                  </div>

                  <div className="border-top border-white opacity-50 pt-4 mt-4">
                    <div className="row">
                      <div className="col-6 col-md-6">
                        <p className="mb-1 fw-bold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Supervisor:</p>
                        <p style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Senior React Developer</p>
                      </div>
                      <div className="col-6 col-md-6">
                        <p className="mb-1 fw-bold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Signature:</p>
                        <div className="border-bottom border-white d-inline-block" style={{width: 'clamp(100px, 20vw, 150px)'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Get In Touch</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--final-width); }
        }
        .skill-item .progress-bar {
          --final-width: attr(style, width);
        }

        /* Gallery grid styles - CSS columns for masonry layout */
        .gallery-grid {
          column-count: 3;
          column-gap: 1rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            column-count: 2;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            column-count: 1;
          }
        }

        .gallery-item {
          display: inline-block;
          width: 100%;
        }

        /* Defense Q: Keyboard accessibility bhanne ke ho? React ma kasari implement garchau?
        Answer: Keyboard accessibility means users can navigate and interact with app using only keyboard,
        no mouse needed. Important for users with motor disabilities, screen readers, etc.
        In React: use onKeyDown handlers, manage focus with useRef, add proper ARIA labels,
        ensure tab order is logical, trap focus in modals, handle Enter/Space for buttons.
        CSS columns are simpler than grid for masonry (irregular heights) but less control over exact positioning. */
      `}</style>
    </div>
  );
}

export default Portfolio;