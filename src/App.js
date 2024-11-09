// App.js
import React, { useState, useEffect } from 'react';
import EnrollmentForm from './components/EnrollmentForm';
import MembershipList from './components/MembershipList';
import BillingAndReminders from './components/BillingAndReminders';
import ActivityReport from './components/ActivityReport';

const App = () => {
  const [members, setMembers] = useState([]);
  const [activityLog, setActivityLog] = useState([]);

  const addMember = (member) => {
    setMembers([...members, member]);
    setActivityLog([...activityLog, { ...member, activity: 'Enrolled' }]);
  };

  const updateMembershipStatus = (index, status) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, status } : member
    );
    setMembers(updatedMembers);
  };

  return (
    <div>
      <h1>Membership Management System</h1>
      <EnrollmentForm addMember={addMember} />
      <MembershipList members={members} updateMembershipStatus={updateMembershipStatus} />
      <BillingAndReminders members={members} />
      <ActivityReport activityLog={activityLog} />
    </div>
  );
};

export default App;
