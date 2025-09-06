import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src="/image.png" alt="Wedding Planner Website" style={{ height: '30px', marginRight: '10px' }} />
            Wedding Planner Website
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planning" onClick={closeMenu}>Planning Tools</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts" onClick={closeMenu}>Contacts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={closeMenu}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(102, 126, 234, 0.95);
            border-radius: 10px;
            margin-top: 10px;
            padding: 1rem;
            backdrop-filter: blur(10px);
          }
          
          .navbar-nav .nav-link {
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin: 0.25rem 0;
            transition: all 0.3s ease;
          }
          
          .navbar-nav .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
          }
        }
      `}</style>
    </>
  );
}

export default Header;
