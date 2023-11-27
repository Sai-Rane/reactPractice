//let's see how to pass data from Child component to parent component.

import React, { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Child;
