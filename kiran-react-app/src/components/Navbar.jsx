import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // useState for mobile menu toggle
  const location = useLocation(); // useLocation gives current route path

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark backdrop-blur-md bg-opacity-90 border-b border-gray-700 font-inter">
      <div className="container">
        <Link className="navbar-brand text-xl font-bold" to="/">Kiran Panta</Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'} overflow-hidden md:overflow-visible`}>
          <ul className="navbar-nav ms-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li className="nav-item">
              <Link className={`nav-link relative transition-all duration-300 hover:text-blue-400 ${location.pathname === '/' ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link relative transition-all duration-300 hover:text-blue-400 ${location.pathname === '/todo' ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'}`} to="/todo">Todo</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link relative transition-all duration-300 hover:text-blue-400 ${location.pathname === '/posts' ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'}`} to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link relative transition-all duration-300 hover:text-blue-400 ${location.pathname === '/about' ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link relative transition-all duration-300 hover:text-blue-400 ${location.pathname === '/portfolio' ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'}`} to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;