import React, { useState, useEffect } from 'react';
import api from '../api';

function WeddingChecklist() {
  const [checklist, setChecklist] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchChecklist();
  }, []);

  const fetchChecklist = async () => {
    try {
      const response = await api.get('/checklist');
      setChecklist(response.data);
    } catch (error) {
      console.error('Error fetching checklist:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/checklist/items', { task: newTask, completed: false });
      setChecklist([...checklist, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await api.put(`/checklist/items/${id}`, { completed: !completed });
      setChecklist(checklist.map(item => item.id === id ? { ...item, completed: !completed } : item));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Wedding Checklist</h2>
      <ul>
        {checklist.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(item.id, item.completed)}
            />
            {item.task}
          </li>
        ))}
      </ul>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default WeddingChecklist;
