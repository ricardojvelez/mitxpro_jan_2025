import React from 'react';
import { CounterProvider } from './CounterContext';
import { ComponentA } from './ComponentA';

// Main component that wraps everything with the Provider
export const CounterApp = () => {
  return (
    // Wrap the entire app in the Provider
    <CounterProvider>
      <ComponentA />
    </CounterProvider>
  );
}; 