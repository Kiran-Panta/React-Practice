// import statements bring in React functions and components
import { useState } from 'react' // useState is hook for state management
import ProfileCard from './components/ProfileCard'
import StatCard from './components/StatCard'
import SkillTag from './components/SkillTag'

// JSX looks like HTML but is JavaScript - Babel converts it
function App() {
  // export default means this is the main component to export
  return (
    // JSX must have one root element (or Fragment)
    <div className="container">
      <h1>Namaste! Ma Kiran Panta hun — React Intern at Tech Yatra</h1>
      
      <div className="row">
        <div className="col-md-6">
          <ProfileCard 
            name="Kiran Panta" 
            role="React Intern" 
            company="Tech Yatra" 
            bio="Learning React and web development." 
            skills={["React", "JS", "HTML"]} 
          />
        </div>
        <div className="col-md-6">
          <ProfileCard 
            name="John Doe" 
            role="Senior Dev" 
            company="Tech Corp" 
            bio="Experienced developer." 
            skills={["Node", "Python", "AWS"]} 
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <StatCard icon="✅" number="15" label="Days Completed" />
        </div>
        <div className="col-md-3">
          <StatCard icon="🧩" number="10" label="Components Built" />
        </div>
        <div className="col-md-3">
          <StatCard icon="📚" number="50" label="Concepts Learned" />
        </div>
        <div className="col-md-3">
          <StatCard icon="⏰" number="80" label="Hours Practiced" />
        </div>
      </div>
      
      <div>
        <SkillTag skill="React" type="tech" />
        <SkillTag skill="Communication" type="soft" />
        <SkillTag skill="Problem Solving" type="soft" />
        <SkillTag skill="CSS" type="tech" />
        <SkillTag skill="JavaScript" type="tech" />
      </div>
    </div>
  )
}

export default App

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
