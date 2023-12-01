//Why useState - We can't directly update our variable in react for that we need a function
import React, { useState } from "react";

const Usestate = () => {
  const [value, setvalue] = useState(0);
  const handleClick = () => {
    setvalue(value + 1);
  };
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
