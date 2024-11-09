// ActivityReport.js
import React from 'react';

const ActivityReport = ({ activityLog }) => {
  return (
    <div>
      <h2>Activity Report</h2>
      <ul>
        {activityLog.map((activity, index) => (
          <li key={index}>
            <strong>Name:</strong> {activity.name} <br />
            <strong>Activity:</strong> {activity.activity} <br />
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityReport;
