import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import StatCard from '../components/StatCard';
import SkillTag from '../components/SkillTag';
import Counter from '../components/Counter';
import ToggleCard from '../components/ToggleCard';
import WeatherWidget from '../components/features/WeatherWidget';
import QuoteWidget from '../components/features/QuoteWidget';
import CountdownTimer from '../components/features/CountdownTimer';
import ScrollToTop from '../components/ui/ScrollToTop';
import Toast from '../components/ui/Toast';
import { useToast } from '../hooks/useToast';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  const { toasts, addToast, removeToast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  // Set document title
  useDocumentTitle('Home - Kiran Panta | React Intern');

  // Show welcome message on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      addToast('Welcome to my React portfolio! 👋', 'success');
      localStorage.setItem('hasVisited', 'true');
    }
  }, [addToast]);

  // Fade-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className={`container my-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <h1>Namaste! Ma Kiran Panta hun — React Intern at Tech Yatra</h1>

        <Counter />

        <div className="row">
          <div className="col-md-4">
            <ToggleCard
              question="What is JSX?"
              answer="JSX is syntax that looks like HTML but is JavaScript. Babel converts it to React.createElement."
            />
          </div>
          <div className="col-md-4">
            <ToggleCard
              question="What is a component?"
              answer="A reusable piece of UI, like a function that returns JSX."
            />
          </div>
          <div className="col-md-4">
            <ToggleCard
              question="What is useState?"
              answer="A hook to add state to functional components. Returns [state, setter]."
            />
          </div>
        </div>

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
            <StatCard icon="✅" number="30" label="Days Completed" />
          </div>
          <div className="col-md-3">
            <StatCard icon="🧩" number="15" label="Components Built" />
          </div>
          <div className="col-md-3">
            <StatCard icon="📚" number="70" label="Concepts Learned" />
          </div>
          <div className="col-md-3">
            <StatCard icon="⏰" number="120" label="Hours Practiced" />
          </div>
        </div>

        <div className="row my-4">
          <div className="col-md-6">
            <WeatherWidget />
          </div>
        </div>

        {/* Motivation Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Stay Motivated</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <QuoteWidget />
            </div>
            <div className="col-md-6 mb-4">
              <CountdownTimer />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Tech Stack</h2>
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <div className="p-3 border rounded hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">⚛️</div>
                <h5>React</h5>
                <p className="text-muted small">Component-based UI library</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="p-3 border rounded hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">🎨</div>
                <h5>Tailwind CSS</h5>
                <p className="text-muted small">Utility-first CSS framework</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="p-3 border rounded hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">📱</div>
                <h5>Bootstrap</h5>
                <p className="text-muted small">Responsive CSS framework</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="p-3 border rounded hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">⚡</div>
                <h5>Vite</h5>
                <p className="text-muted small">Fast build tool</p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <SkillTag skill="React" type="tech" />
          <SkillTag skill="Communication" type="soft" />
          <SkillTag skill="Problem Solving" type="soft" />
          <SkillTag skill="CSS" type="tech" />
          <SkillTag skill="JavaScript" type="tech" />
        </div>
      </main>

      <ScrollToTop />
      <Toast toasts={toasts} removeToast={removeToast} />
    </>
  );
}

export default Home;