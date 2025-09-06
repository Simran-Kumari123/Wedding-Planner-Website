import React, { useState, useEffect } from 'react';
import api from '../api';

function VendorDirectory() {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({ name: '', category: '', contact: '' });
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetchVendors();
  }, [categoryFilter]);

  const fetchVendors = async () => {
    try {
      const url = categoryFilter ? `/vendors?category=${categoryFilter}` : '/vendors';
      const response = await api.get(url);
      setVendors(response.data);
      setSelectedVendor(null);
      setReviews([]);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const addVendor = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/vendors', newVendor);
      setVendors([...vendors, response.data]);
      setNewVendor({ name: '', category: '', contact: '' });
    } catch (error) {
      console.error('Error adding vendor:', error);
    }
  };

  const fetchReviews = async (vendorId) => {
    try {
      const response = await api.get(`/vendors/${vendorId}/reviews`);
      setReviews(response.data);
      setSelectedVendor(vendorId);
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const addReview = async (e) => {
    e.preventDefault();
    if (!selectedVendor) return;
    try {
      const response = await api.post(`/vendors/${selectedVendor}/reviews`, newReview);
      setReviews([...reviews, response.data]);
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Vendor Directory</h2>
      <div>
        <input
          type="text"
          placeholder="Filter by category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
        />
      </div>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id} style={{ marginBottom: '10px' }}>
            <strong>{vendor.name}</strong> - {vendor.category} - {vendor.contact}
            <button style={{ marginLeft: '10px' }} onClick={() => fetchReviews(vendor.id)}>
              Show Reviews
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addVendor} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={newVendor.name}
          onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newVendor.category}
          onChange={(e) => setNewVendor({ ...newVendor, category: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Contact"
          value={newVendor.contact}
          onChange={(e) => setNewVendor({ ...newVendor, contact: e.target.value })}
          required
        />
        <button type="submit">Add Vendor</button>
      </form>

      {selectedVendor && (
        <div style={{ marginTop: '30px' }}>
          <h3>Reviews</h3>
          <ul>
            {reviews.length === 0 && <li>No reviews yet.</li>}
            {reviews.map(review => (
              <li key={review.id}>
                Rating: {review.rating} / 5 - {review.comment}
              </li>
            ))}
          </ul>
          <form onSubmit={addReview} style={{ marginTop: '10px' }}>
            <label>
              Rating:
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Comment:
              <input
                type="text"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
                style={{ width: '300px', marginLeft: '10px' }}
              />
            </label>
            <br />
            <button type="submit" style={{ marginTop: '10px' }}>Add Review</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default VendorDirectory;
