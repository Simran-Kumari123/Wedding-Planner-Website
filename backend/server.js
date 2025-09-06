const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data storage
let vendors = [
  { id: 1, name: 'Photographer', category: 'Photography', contact: 'photo@example.com', ratings: [], reviews: [] },
  { id: 2, name: 'Caterer', category: 'Food', contact: 'cater@example.com', ratings: [], reviews: [] }
];

let budget = { total: 10000, items: [
  { id: 1, name: 'Venue', amount: 5000 },
  { id: 2, name: 'Catering', amount: 3000 }
] };

let guests = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'invited' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'confirmed' }
];

let rsvps = [];

let checklist = [
  { id: 1, task: 'Book venue', completed: true },
  { id: 2, task: 'Hire photographer', completed: false }
];

// Vendor routes
app.get('/api/vendors', (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = vendors.filter(v => v.category.toLowerCase() === category.toLowerCase());
    res.json(filtered);
  } else {
    res.json(vendors);
  }
});
app.post('/api/vendors', (req, res) => {
  const vendor = { id: vendors.length + 1, ratings: [], reviews: [], ...req.body };
  vendors.push(vendor);
  res.json(vendor);
});

// Budget routes
app.get('/api/budget', (req, res) => res.json(budget));
app.post('/api/budget/items', (req, res) => {
  const item = { id: budget.items.length + 1, ...req.body };
  budget.items.push(item);
  budget.total += item.amount;
  res.json(item);
});

// Vendor reviews routes
app.get('/api/vendors/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id);
  const vendor = vendors.find(v => v.id === id);
  if (vendor) {
    res.json(vendor.reviews);
  } else {
    res.status(404).json({ error: 'Vendor not found' });
  }
});

app.post('/api/vendors/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id);
  const vendor = vendors.find(v => v.id === id);
  if (vendor) {
    const review = { id: vendor.reviews.length + 1, rating: req.body.rating, comment: req.body.comment };
    vendor.reviews.push(review);
    vendor.ratings.push(review.rating);
    res.json(review);
  } else {
    res.status(404).json({ error: 'Vendor not found' });
  }
});

// Guest routes
app.get('/api/guests', (req, res) => res.json(guests));
app.post('/api/guests', (req, res) => {
  const guest = { id: guests.length + 1, ...req.body };
  guests.push(guest);
  res.json(guest);
});

// RSVP routes
app.post('/api/rsvp', (req, res) => {
  const rsvp = { id: rsvps.length + 1, ...req.body };
  rsvps.push(rsvp);
  res.json(rsvp);
});

// Checklist routes
app.get('/api/checklist', (req, res) => res.json(checklist));
app.post('/api/checklist/items', (req, res) => {
  const item = { id: checklist.length + 1, ...req.body };
  checklist.push(item);
  res.json(item);
});
app.put('/api/checklist/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = checklist.find(i => i.id === id);
  if (item) {
    item.completed = req.body.completed;
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
