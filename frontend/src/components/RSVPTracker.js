import React, { useState } from 'react';
import api from '../api';

function RSVPTracker() {
  const [rsvp, setRsvp] = useState({ name: '', email: '', attending: 'yes', guests: 1 });

  const submitRSVP = async (e) => {
    e.preventDefault();
    try {
      await api.post('/rsvp', rsvp);
      alert('RSVP submitted successfully!');
      setRsvp({ name: '', email: '', attending: 'yes', guests: 1 });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Error submitting RSVP');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>RSVP Tracker</h2>
      <form onSubmit={submitRSVP}>
        <input
          type="text"
          placeholder="Name"
          value={rsvp.name}
          onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={rsvp.email}
          onChange={(e) => setRsvp({ ...rsvp, email: e.target.value })}
          required
        />
        <select
          value={rsvp.attending}
          onChange={(e) => setRsvp({ ...rsvp, attending: e.target.value })}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          type="number"
          min="1"
          placeholder="Number of Guests"
          value={rsvp.guests}
          onChange={(e) => setRsvp({ ...rsvp, guests: parseInt(e.target.value) })}
          required
        />
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
}

export default RSVPTracker;
