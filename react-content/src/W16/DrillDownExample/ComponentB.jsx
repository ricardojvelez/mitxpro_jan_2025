import React from 'react';

export const ComponentB = ({ count, increment }) => {
  return (
    <div className="component-container">
      <h2>Component B</h2>
      <p>Count in B: {count}</p>
      <button onClick={increment}>Increment from B</button>
    </div>
  );
}; 