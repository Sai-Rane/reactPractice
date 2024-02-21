//Why useState - We can't directly update our variable in react for that we need a function
// useState is asynchronous in react
// Javascript is synchronous and single threaded language(i.e code will be exceuted one line at a time and in order)
// But callback functions give us the power of asynchronous operation
import React, { useState } from "react";

const Usestate = () => {
  const [value, setvalue] = useState(0);
  const handleClick = () => {
    setvalue(value + 1);
  };
  console.log("value", value);
  return (
    <>
      {console.log("hsjdg")}
      <button onClick={handleClick}>Increment</button>
      {value}
      <button onClick={() => setvalue(value - 1)}>Decrement</button>
    </>
  );
};

export default Usestate;
