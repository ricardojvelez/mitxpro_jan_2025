import React, { createContext, useState } from 'react';

// 1. Create the context
const CounterContext = createContext();

// 2. Create Provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

// 3. Export the context for use in other components
export { CounterContext }; 