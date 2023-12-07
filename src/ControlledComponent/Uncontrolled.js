import React, { useRef } from "react";

//Uncontrolled compoenents are controlled by DOM
const Uncontrolled = () => {
  const ref = useRef();
  console.log("ref", ref);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" ref={ref}></input>
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
