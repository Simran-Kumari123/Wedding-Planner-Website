import React from 'react';
import WeddingCountdown from '../components/WeddingCountdown';
import PhotoGallery from '../components/PhotoGallery';
import './Home.css';

function Home() {
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

    document.querySelectorAll('.animate-fade-up, .animate-slide-left, .animate-slide-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
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

    document.querySelectorAll('.animate-fade-up, .animate-slide-left, .animate-slide-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-heart heart-1">💕</div>
            <div className="floating-heart heart-2">💖</div>
            <div className="floating-heart heart-3">💝</div>
            <div className="floating-ring ring-1">💍</div>
            <div className="floating-ring ring-2">💎</div>
          </div>
        </div>
        <div className="container text-center hero-content">
          <h1 className="hero-title">Welcome to Our Wedding Planning</h1>
          <div className="hero-decoration"></div>
          <p className="hero-subtitle">Creating unforgettable memories for your special day</p>
          <button className="cta-button" onClick={() => alert('Get Started clicked!')}>
            <span>Get Started</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="countdown-wrapper animate-fade-up">
                <h2 className="section-title text-center">Countdown to Your Big Day</h2>
                <div className="countdown-card">
                  <WeddingCountdown weddingDate="2025-12-31T00:00:00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="animate-fade-up">
            <h2 className="section-title text-center">Our Wedding Gallery</h2>
            <p className="section-subtitle text-center">Capturing beautiful moments and memories</p>
            <PhotoGallery />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section">
        <div className="container">
          <div className="animate-fade-up">
            <h2 className="section-title text-center">Our Services</h2>
            <p className="section-subtitle text-center">Everything you need for your perfect wedding</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="service-card animate-slide-left">
                <div className="service-icon">
                  <i className="fas fa-address-book"></i>
                </div>
                <h5 className="service-title">Vendor Directory</h5>
                <p className="service-description">Find the best vendors for your wedding</p>
                <div className="service-overlay">
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card animate-fade-up">
                <div className="service-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h5 className="service-title">Budget Management</h5>
                <p className="service-description">Keep track of your wedding expenses</p>
                <div className="service-overlay">
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card animate-slide-right">
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h5 className="service-title">Guest Management</h5>
                <p className="service-description">Manage your guest list and RSVPs</p>
                <div className="service-overlay">
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
