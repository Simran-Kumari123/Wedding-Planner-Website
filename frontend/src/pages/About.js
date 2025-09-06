import React from 'react';
import './About.css';

function About() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-left, .animate-right, .animate-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <div className="hero-decoration"></div>
          <p className="hero-subtitle">Creating magical moments, one wedding at a time</p>
        </div>
        <div className="floating-hearts">
          <i className="fas fa-heart heart-1"></i>
          <i className="fas fa-heart heart-2"></i>
          <i className="fas fa-heart heart-3"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Story Section */}
        <div className="story-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="story-content animate-left">
                <h2 className="section-title">Our Story</h2>
                <p className="story-text">
                  Welcome to Wedding Planner! We are dedicated to helping you plan your dream wedding with ease and joy.
                  Our platform offers comprehensive tools and resources to manage every aspect of your special day.
                </p>
                <div className="story-highlight">
                  <i className="fas fa-quote-left"></i>
                  <span>"Every love story deserves a perfect beginning"</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-image animate-right">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" alt="Wedding couple" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title text-center">What We Offer</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card animate-up delay-1">
                <div className="feature-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4>Event Planning</h4>
                <p>Comprehensive timeline and task management for your perfect day</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card animate-up delay-2">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Guest Management</h4>
                <p>Easy RSVP tracking and guest list organization</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card animate-up delay-3">
                <div className="feature-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h4>Budget Tracking</h4>
                <p>Smart budget management to keep your expenses on track</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-image animate-left">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Our team" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-content animate-right">
                <h2 className="section-title">Our Passionate Team</h2>
                <p className="team-text">
                  Our team is passionate about weddings and committed to supporting you every step of the way.
                  We believe that every couple deserves their dream wedding, and we're here to make it happen.
                </p>
                <div className="team-stats">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Happy Couples</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
