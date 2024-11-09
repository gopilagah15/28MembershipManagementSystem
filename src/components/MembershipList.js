// MembershipList.js
import React from 'react';

const MembershipList = ({ members, updateMembershipStatus }) => {
  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <strong>Name:</strong> {member.name} <br />
            <strong>Email:</strong> {member.email} <br />
            <strong>Status:</strong> {member.status} <br />
            <strong>Expiry Date:</strong> {member.expiryDate.toLocaleDateString()} <br />
            <button onClick={() => updateMembershipStatus(index, 'Expired')}>Mark as Expired</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembershipList;
