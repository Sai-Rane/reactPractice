// https://www.youtube.com/watch?v=nX9ShZo0COc
// What is useRef?
// It is a hook used to manipulate DOM
import React, { useRef, useState } from "react";

const Ref = () => {
  const refElement = useRef();
  console.log("refElement", refElement);

  const [name, setName] = useState("Morning");
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "orange";
  }
  return (
    <>
      {/* Input has a property known as ref as shown below */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={refElement}
      ></input>
      <br />
      <button onClick={Reset}>Reset</button>
      <br />
      <button onClick={handleInput}>Change Color</button>
    </>
  );
};

export default Ref;
