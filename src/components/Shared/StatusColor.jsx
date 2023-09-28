import React from 'react';

function StatusComponent({ status }) {
    console.log("status", status)
  const statusColors = {
    'Pending': 'rgba(255, 179, 54, 0.3)',
    'Completed': '#FFB3364D',
    'Failed': 'red',
  };
  const backgroundColor = statusColors[status] || 'gray';

  return (
    <div style={{ backgroundColor: backgroundColor, borderRadius: "6px", padding:"4px" }}>
      <p>{status}</p>
    </div>
  );
}

export default StatusComponent;
