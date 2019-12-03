import React, { useState } from 'react';

function HookCounter(props) {

  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  }

  const decrementHandler = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p>This "Counter" (HookCounter.js) is a function component (a function with hooks).</p>
      <div>{counter}</div>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
}

export default HookCounter;