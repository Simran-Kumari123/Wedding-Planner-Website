import React from 'react';
import './Contact.css';

function Contact() {
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

    document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
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

    document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-background">
          <div className="floating-icons">
            <i className="fas fa-envelope floating-icon icon-1"></i>
            <i className="fas fa-phone floating-icon icon-2"></i>
            <i className="fas fa-map-marker-alt floating-icon icon-3"></i>
            <i className="fas fa-heart floating-icon icon-4"></i>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="contact-title">Contact Us</h1>
            <div className="title-decoration"></div>
            <p className="contact-subtitle">Let's make your dream wedding come true together</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="contact-form-wrapper animate-slide-left">
              <h3 className="form-title">Get in Touch</h3>
              <p className="form-description">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-input" id="name" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-input" id="email" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-textarea" id="message" rows="5" placeholder="Tell us about your dream wedding..."></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-info-wrapper animate-slide-right">
              <h3 className="info-title">Contact Information</h3>
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>info@weddingplanner.com</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Address</h5>
                    <p>123 Wedding Street, Love City, LC 12345</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Hours</h5>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
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

export default Contact;
