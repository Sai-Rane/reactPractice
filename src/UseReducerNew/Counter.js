//What is useReducer
// useReducer is a react hook for state management
// Alternative for useState hook
// Preferable for complex state logic
// Syntax:
// const [state,dispatch]=useReducer(reducer,initialState)
// reducer is a function which takes currentState and action as parameter

import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {count}
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <div>Counter</div>
    </>
  );
};

export default Counter;
