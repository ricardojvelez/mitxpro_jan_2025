import React, { useState } from 'react';
import { ComponentB } from './ComponentB';

export const ComponentA = () => {
  const [count, setCount] = useState(0); // State is local to the component

  const increment = () => setCount(count + 1); // Increment the count

  return (
    <div className="component-container">
      <h2>Component A</h2>
      <p>Count in A: {count}</p>
      <button onClick={increment}>Increment from A</button>
      <ComponentB count={count} increment={increment} />
    </div>
  );
}; 