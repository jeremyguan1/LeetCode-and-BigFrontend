import React, { useState } from "react";

function ReactCounterApp() {
  const [state, setState] = useState(0);

  const handleFunctionClicked = (e) => {
    if (e.target.dataset.testid === "increment-button") {
      setState((prev) => prev + 1);
    } else if (e.target.dataset.testid === "decrement-button") {
      setState((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return prev - 1;
        }
      });
    }
  };
  return (
    <div onClick={handleFunctionClicked}>
      <button data-testid="decrement-button">-</button>
      <button data-testid="increment-button">+</button>
      <p>clicked: {state}</p>
    </div>
  );
}

export default ReactCounterApp;
