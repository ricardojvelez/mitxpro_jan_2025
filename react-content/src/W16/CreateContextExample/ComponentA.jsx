import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import { ComponentB } from './ComponentB';

export const ComponentA = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div className="component-container">
      <h2>Component A with Context</h2>
      <p>Count in A: {count}</p>
      <button onClick={increment}>Increment from A</button>
      <ComponentB />
    </div>
  );
}; 