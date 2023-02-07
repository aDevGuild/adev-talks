import React from 'react';

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#2a2734',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);
