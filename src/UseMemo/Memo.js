//Operations returning same value are stored in Cache, so that there is no need to perform the task again

// Example:
// function add(a,b) {
//     return a+b
// }
// add(5,5)
// Suppose one user has passed (5,5) as parameter to the add function and the next user also passes (5,5) as parameter again to the add function then the add function will not perform the add operation again, instead it will return the value of first user which he had stored in cache

//Why we use useMemo -> To improve performance of our Application. useMemo takes in a function and a dependency
//useMemo is used for function and variables and React.memo (React.memo is a HOC and useMemo is a hook) is used to memoize React component

import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //If you check in console the multiply function gets called on click of add BUTTON as well as sub BUTTON
  //   function multiply() {
  //     console.log("running");
  //     return add * 10;
  //   }

  //Now using useMemo and passing the function in useMemo the multiply function will not run when you click on sub button
  const multiplication = useMemo(
    function multiply() {
      console.log("running");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Sub</button>
      <span>{minus}</span>
    </>
  );
};

export default Memo;
