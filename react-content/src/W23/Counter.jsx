import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // count is the state variable, setCount is the function to update the state

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>App Counter</h2>
      <p>Count: {count}</p>
      <button style={{marginRight: "8px"}} onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;