import React, { useState, useEffect } from 'react';
import api from '../api';

function BudgetManager() {
  const [budget, setBudget] = useState({ total: 0, items: [] });
  const [newItem, setNewItem] = useState({ name: '', amount: '' });

  useEffect(() => {
    fetchBudget();
  }, []);

  const fetchBudget = async () => {
    try {
      const response = await api.get('/budget');
      setBudget(response.data);
    } catch (error) {
      console.error('Error fetching budget:', error);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const amountNum = parseFloat(newItem.amount);
      if (isNaN(amountNum)) {
        alert('Please enter a valid number for amount');
        return;
      }
      const response = await api.post('/budget/items', { name: newItem.name, amount: amountNum });
      setBudget({
        total: budget.total + amountNum,
        items: [...budget.items, response.data]
      });
      setNewItem({ name: '', amount: '' });
    } catch (error) {
      console.error('Error adding budget item:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Budget Manager</h2>
      <p>Total Budget: ${budget.total.toFixed(2)}</p>
      <ul>
        {budget.items.map(item => (
          <li key={item.id}>{item.name}: ${item.amount.toFixed(2)}</li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          value={newItem.amount}
          onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default BudgetManager;
