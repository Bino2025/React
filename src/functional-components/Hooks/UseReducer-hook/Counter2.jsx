import React, { useReducer } from "react";

// 1. Initial State
const initialState = { count: 0 };

// 2. Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

// 3. Component
export default function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}