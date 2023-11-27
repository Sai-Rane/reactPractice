import React, { useReducer } from "react";

const Usereducer = () => {
  const initialstate = 0;
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if ((action.type = "DECREMENT")) {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      {state}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};

export default Usereducer;
