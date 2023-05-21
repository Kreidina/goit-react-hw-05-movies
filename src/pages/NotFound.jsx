import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '40px 0',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p style={{ marginTop: '20px' }}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
