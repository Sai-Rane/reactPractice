//Why useCallback?
//Both useMemo and useCallback are used to improve performance of application
//Omly difference between them is useMemo returns a memoized value and useCallback returns a memoized function

import React, { useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [add, setAdd] = useState(0);
  const Learning = () => {
    // console.log("learning function");
  };
  return (
    <>
      {/* As we are clicking on Add button the Child component is getting rendered on every click. To avoid rendering of child compoennt on every click of Add button, we can memoize the child component */}
      <Child Learning={Learning()} />
      {add}
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Add
      </button>
      <div>Callback</div>
    </>
  );
};

export default Callback;
