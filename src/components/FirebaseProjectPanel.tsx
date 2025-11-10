import React from 'react';

const FirebaseProjectPanel: React.FC<{ chunks: any[] }> = ({ chunks }) => {
  return (
    <div>
      <h3>Firebase Project Panel</h3>
      <p>{chunks.length} chunks loaded from Firebase</p>
    </div>
  );
};

export default FirebaseProjectPanel;