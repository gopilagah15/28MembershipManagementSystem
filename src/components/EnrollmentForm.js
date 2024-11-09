// EnrollmentForm.js
import React, { useState } from 'react';

const EnrollmentForm = ({ addMember }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipType, setMembershipType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    addMember({ name, email, membershipType, expiryDate, status: 'Active' });
    setName('');
    setEmail('');
    setMembershipType('');
    alert(`Welcome, ${name}! Your membership has been created.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enroll Member</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <select value={membershipType} onChange={(e) => setMembershipType(e.target.value)} required>
        <option value="">Select Membership Type</option>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
      </select>
      <button type="submit">Enroll Member</button>
    </form>
  );
};

export default EnrollmentForm;
