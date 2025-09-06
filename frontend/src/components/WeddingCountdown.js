import React, { useState, useEffect } from 'react';

function WeddingCountdown({ weddingDate = '2025-12-31T00:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date(weddingDate);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ finished: true });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  if (timeLeft.finished) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ color: '#ffffff', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>🎉 The Wedding Day has Arrived! 🎊</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '30px', fontSize: '2rem' }}>Wedding Countdown</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} style={{ 
            padding: '20px', 
            background: 'rgba(255, 255, 255, 0.9)', 
            borderRadius: '15px',
            minWidth: '100px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            border: '2px solid rgba(255, 107, 107, 0.3)'
          }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#ff6b6b',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>{timeLeft[unit] || 0}</h3>
            <p style={{ 
              margin: 0, 
              fontSize: '1rem', 
              color: '#2c3e50',
              textTransform: 'uppercase',
              fontWeight: '600',
              letterSpacing: '1px'
            }}>{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeddingCountdown;
