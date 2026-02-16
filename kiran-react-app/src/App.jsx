// import statements bring in React functions and components
import { useState, useEffect } from 'react' // useState is hook for state management
import { BrowserRouter, Routes, Route } from 'react-router-dom' // React Router for navigation
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TodoApp from './pages/TodoApp'
import About from './pages/About'
import PostsPage from './pages/PostsPage'
import PostDetail from './pages/PostDetail'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import DemoMode from './components/ui/DemoMode'

// JSX looks like HTML but is JavaScript - Babel converts it
function App() {
  const [demoMode, setDemoMode] = useState(false);

  // Keyboard shortcut for demo mode (Ctrl+D)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        setDemoMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // export default means this is the main component to export
  return (
    // BrowserRouter provides routing context to the app
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <DemoMode isActive={demoMode} onToggle={() => setDemoMode(false)} />
        <Navbar />
        {/* Routes renders the first matching route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* * catches all unmatched routes for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
