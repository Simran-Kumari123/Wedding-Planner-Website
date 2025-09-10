import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Planning.css';
import TimelinePlanner from '../components/TimelinePlanner';
import BudgetManager from '../components/BudgetManager';
import GuestList from '../components/GuestList';
import VendorDirectory from '../components/VendorDirectory';
import WeddingChecklist from '../components/WeddingChecklist';

function Planning() {
  const [selectedTool, setSelectedTool] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  const handleStartPlanning = () => {
    navigate('/planning');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTool(null);
  };

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

  const planningTools = [
    {
      id: 1,
      title: 'Budget Tracker',
      description: 'Smart budget management to keep your wedding expenses on track',
      icon: 'fas fa-calculator',
      color: '#2c3e50',
      features: ['Expense Categories', 'Real-time Updates', 'Budget Alerts', 'Cost Analysis'],
      status: 'Popular',
      users: '15K+'
    },
    {
      id: 2,
      title: 'Guest List Manager',
      description: 'Effortlessly organize guests, track RSVPs, and manage seating',
      icon: 'fas fa-users',
      color: '#d4af37',
      features: ['Contact Import', 'RSVP Tracking', 'Seating Charts', 'Dietary Preferences'],
      status: 'New',
      users: '12K+'
    },
    {
      id: 3,
      title: 'Timeline Planner',
      description: 'Create detailed schedules and coordinate your perfect wedding day',
      icon: 'fas fa-clock',
      color: '#8fbc8f',
      features: ['Day Schedule', 'Vendor Sync', 'Task Reminders', 'Timeline Templates'],
      status: 'Featured',
      users: '8K+'
    },
    {
      id: 4,
      title: 'Vendor Directory',
      description: 'Discover, compare, and book the best wedding vendors',
      icon: 'fas fa-address-book',
      color: '#b8860b',
      features: ['Vendor Search', 'Reviews & Ratings', 'Contract Tools', 'Payment Tracking'],
      status: 'Trending',
      users: '20K+'
    },
    {
      id: 5,
      title: 'Checklist Manager',
      description: 'Complete wedding planning checklist with smart reminders',
      icon: 'fas fa-check-circle',
      color: '#708090',
      features: ['Task Categories', 'Progress Tracking', 'Smart Alerts', 'Custom Lists'],
      status: 'Essential',
      users: '18K+'
    },
    {
      id: 6,
      title: 'Inspiration Board',
      description: 'Collect, organize, and share your wedding vision and ideas',
      icon: 'fas fa-palette',
      color: '#9acd32',
      features: ['Photo Collections', 'Color Palettes', 'Mood Boards', 'Idea Sharing'],
      status: 'Creative',
      users: '10K+'
    }
  ];

  return (
    <div className="planning-container">
      {/* Hero Section */}
      <div className="planning-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-tool tool-1">💗</div>
            <div className="floating-tool tool-2">💗</div>
            <div className="floating-tool tool-3">💗</div>
            <div className="floating-tool tool-4">💗</div>
            <div className="floating-tool tool-5">💗</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="planning-title">Wedding Planning Tools</h1>
            <div className="title-decoration"></div>
            <p className="planning-subtitle">Everything you need to plan your perfect wedding day</p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container py-5">
        <div className="tools-grid">
          {planningTools.map((tool, index) => (
            <div key={tool.id} className={`tool-card animate-fade-up delay-${index % 3}`}>
              <div className="tool-header" style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}99)` }}>
                <div className="tool-icon">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="tool-title">{tool.title}</h3>
              </div>
              <div className="tool-body">
                <p className="tool-description">{tool.description}</p>
                <div className="tool-features">
                  <h5>Features:</h5>
                  <ul>
                    {tool.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tool-footer">
                  <div className="tool-stats">
                    <span className="user-count">{tool.users} users</span>
                    <span className={`status-badge status-${tool.status.toLowerCase()}`}>{tool.status}</span>
                  </div>
                  <button
                    className="tool-btn"
                    style={{ background: tool.color }}
                    onClick={() => handleToolClick(tool)}
                  >
                    <span>Click to Open</span>
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="quick-start-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="quick-start-content animate-slide-left">
                <h2 className="section-title">Ready to Start Planning?</h2>
                <p className="section-description">
                  Begin your wedding planning journey with our comprehensive tools. 
                  From budget tracking to guest management, we've got everything covered.
                </p>
                <div className="quick-stats">
                  <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Happy Couples</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Planning Tools</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                </div>
                <button className="cta-button" onClick={handleStartPlanning}>
                  <span>Start Planning Now</span>
                  <i className="fas fa-rocket"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quick-start-image animate-slide-right">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" alt="Wedding planning" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTool && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ background: `linear-gradient(135deg, ${selectedTool.color}, ${selectedTool.color}99)` }}>
              <div className="modal-icon">
                <i className={selectedTool.icon}></i>
              </div>
              <h3>{selectedTool.title}</h3>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedTool.description}</p>
              <div className="modal-features">
                <h4>What you can do:</h4>
                <ul>
                  {selectedTool.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-star"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedTool.title === 'Timeline Planner' ? (
                <TimelinePlanner />
              ) : selectedTool.title === 'Budget Tracker' ? (
                <BudgetManager />
              ) : selectedTool.title === 'Guest List Manager' ? (
                <GuestList />
              ) : selectedTool.title === 'Vendor Directory' ? (
                <VendorDirectory />
              ) : selectedTool.title === 'Checklist Manager' ? (
                <WeddingChecklist />
              ) : selectedTool.title === 'Inspiration Board' ? (
                <div className="inspiration-placeholder">
                  <h4>🎨 Inspiration Board Coming Soon!</h4>
                  <p>Collect and organize your wedding inspiration here.</p>
                </div>
              ) : (
                <>
                  <div className="modal-stats">
                    <div className="stat-box">
                      <div className="stat-value">{selectedTool.users}</div>
                      <div className="stat-text">Active Users</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-value">4.8⭐</div>
                      <div className="stat-text">User Rating</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-value">Free</div>
                      <div className="stat-text">To Use</div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="modal-btn secondary" onClick={closeModal}>
                Maybe Later
              </button>
              <button
                className="modal-btn primary"
                style={{ background: selectedTool.color }}
                onClick={() => {
                  if (selectedTool.title === 'Timeline Planner') {
                    // Timeline Planner is already shown above
                    return;
                  }
                  // Tool is already open in the modal above
                  return;
                }}
              >
                {selectedTool.title === 'Timeline Planner' ? 'Timeline Planner Open' : `${selectedTool.title} Open`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Planning;
