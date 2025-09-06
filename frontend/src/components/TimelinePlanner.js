import React, { useState } from 'react';
import './TimelinePlanner.css';

function TimelinePlanner() {
  const [selectedDate, setSelectedDate] = useState('2025-12-31');
  const [events, setEvents] = useState([
    { id: 1, time: '09:00', title: 'Hair & Makeup', duration: '3 hours', vendor: 'Beauty Studio', status: 'confirmed' },
    { id: 2, time: '12:00', title: 'Photography Session', duration: '1 hour', vendor: 'Photo Pro', status: 'pending' },
    { id: 3, time: '14:00', title: 'Ceremony', duration: '1 hour', vendor: 'Wedding Venue', status: 'confirmed' },
    { id: 4, time: '15:30', title: 'Cocktail Hour', duration: '1.5 hours', vendor: 'Catering Co', status: 'confirmed' },
    { id: 5, time: '17:00', title: 'Reception', duration: '4 hours', vendor: 'Wedding Venue', status: 'confirmed' }
  ]);

  const [newEvent, setNewEvent] = useState({ time: '', title: '', duration: '', vendor: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  const addEvent = () => {
    if (newEvent.time && newEvent.title) {
      setEvents([...events, {
        id: Date.now(),
        ...newEvent,
        status: 'pending'
      }]);
      setNewEvent({ time: '', title: '', duration: '', vendor: '' });
      setShowAddForm(false);
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const toggleStatus = (id) => {
    setEvents(events.map(event => 
      event.id === id 
        ? { ...event, status: event.status === 'confirmed' ? 'pending' : 'confirmed' }
        : event
    ));
  };

  return (
    <div className="timeline-planner">
      <div className="timeline-header">
        <h2>Wedding Day Timeline</h2>
        <div className="date-selector">
          <label>Wedding Date:</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-input"
          />
        </div>
      </div>

      <div className="timeline-controls">
        <button 
          className="add-event-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <i className="fas fa-plus"></i>
          Add Event
        </button>
        <div className="timeline-stats">
          <span className="stat">
            <i className="fas fa-check-circle"></i>
            {events.filter(e => e.status === 'confirmed').length} Confirmed
          </span>
          <span className="stat">
            <i className="fas fa-clock"></i>
            {events.filter(e => e.status === 'pending').length} Pending
          </span>
        </div>
      </div>

      {showAddForm && (
        <div className="add-event-form">
          <h4>Add New Event</h4>
          <div className="form-row">
            <input
              type="time"
              placeholder="Time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
            />
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <input
              type="text"
              placeholder="Duration"
              value={newEvent.duration}
              onChange={(e) => setNewEvent({...newEvent, duration: e.target.value})}
            />
            <input
              type="text"
              placeholder="Vendor"
              value={newEvent.vendor}
              onChange={(e) => setNewEvent({...newEvent, vendor: e.target.value})}
            />
          </div>
          <div className="form-actions">
            <button className="save-btn" onClick={addEvent}>Save Event</button>
            <button className="cancel-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.sort((a, b) => a.time.localeCompare(b.time)).map((event, index) => (
          <div key={event.id} className={`timeline-event ${event.status}`}>
            <div className="event-time">
              <span className="time">{event.time}</span>
              <div className="time-dot"></div>
            </div>
            <div className="event-card">
              <div className="event-header">
                <h4>{event.title}</h4>
                <div className="event-actions">
                  <button 
                    className={`status-btn ${event.status}`}
                    onClick={() => toggleStatus(event.id)}
                    title={event.status === 'confirmed' ? 'Mark as Pending' : 'Mark as Confirmed'}
                  >
                    <i className={`fas ${event.status === 'confirmed' ? 'fa-check-circle' : 'fa-clock'}`}></i>
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => deleteEvent(event.id)}
                    title="Delete Event"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <div className="event-details">
                <span className="duration">
                  <i className="fas fa-hourglass-half"></i>
                  {event.duration}
                </span>
                {event.vendor && (
                  <span className="vendor">
                    <i className="fas fa-user-tie"></i>
                    {event.vendor}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-footer">
        <div className="timeline-summary">
          <h4>Timeline Summary</h4>
          <p>Your wedding day has {events.length} scheduled events</p>
          <p>First event starts at {events.length > 0 ? Math.min(...events.map(e => e.time)) : 'N/A'}</p>
          <p>Last event ends approximately at {events.length > 0 ? 'Evening' : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelinePlanner;