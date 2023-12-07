//Custom hook
// A custom hook is a JS function whose name starts with "use"
// We can use other hooks in custom hooks as well

// Why to use Custom hook ?
// To remove duplicated logic in components and we can extract logic to custom hook
import React from "react";
import UseCounter from "./UseCounter";

const Hook = () => {
  const [count, Increment, Decrement] = UseCounter(); //destructuring
  return (
    <>
      {count}
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
};

export default Hook;
