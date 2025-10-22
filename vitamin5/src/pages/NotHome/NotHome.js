import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  useEffect(() => {
  }, [count]); 

  return (
    <div>
      <h1>Not Home Page</h1>
      <h2>Counter: {count}</h2>

      {count > 5 && <p><b>You passed 5!</b></p>}

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      
    </div>
  );
};

export default NotHome;
