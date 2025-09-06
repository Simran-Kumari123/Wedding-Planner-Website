import React, { useState, useEffect } from 'react';
import api from '../api';

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await api.get('/guests');
      setGuests(response.data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  };

  const addGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/guests', { ...newGuest, status: 'invited' });
      setGuests([...guests, response.data]);
      setNewGuest({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding guest:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Guest List</h2>
      <ul>
        {guests.map(guest => (
          <li key={guest.id}>
            {guest.name} - {guest.email} - Status: {guest.status}
          </li>
        ))}
      </ul>
      <form onSubmit={addGuest}>
        <input
          type="text"
          placeholder="Name"
          value={newGuest.name}
          onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newGuest.email}
          onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
          required
        />
        <button type="submit">Add Guest</button>
      </form>
    </div>
  );
}

export default GuestList;
