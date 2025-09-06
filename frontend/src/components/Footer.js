import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Wedding Planner</h5>
            <p>Creating magical moments for your special day. We help you plan the perfect wedding with our comprehensive tools and services.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contacts" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Info</h5>
            <p><i className="fas fa-phone me-2"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope me-2"></i> info@weddingplanner.com</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> 123 Wedding Street, Love City</p>
            <div className="social-links mt-3">
              <h6>Follow Us</h6>
              <a href="https://github.com/Simran-Kumari123" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/simran-kumari123" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                <FaLinkedin />
              </a>
              <a href="https://app.netlify.com/teams/simran-kumari123/projects" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Wedding Planner | All rights reserved | Made with ❤️ by Simarn</p>
        </div>
        <style>{`
          .social-links a:hover {
            color: #ff6b6b !important;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </footer>
  );
}

export default Footer;
