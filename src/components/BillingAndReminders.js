// BillingAndReminders.js
import React, { useEffect } from 'react';

const BillingAndReminders = ({ members }) => {
  useEffect(() => {
    const today = new Date();
    members.forEach((member) => {
      const daysLeft = Math.ceil((new Date(member.expiryDate) - today) / (1000 * 60 * 60 * 24));
      if (daysLeft === 30) {
        alert(`Reminder: ${member.name}, your membership expires in 30 days.`);
      }
    });
  }, [members]);

  return (
    <div>
      <h2>Billing & Reminders</h2>
      <p>Reminders have been sent for memberships expiring in 30 days.</p>
    </div>
  );
};

export default BillingAndReminders;
