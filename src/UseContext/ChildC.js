import React, { useContext } from "react";
import { data, data1 } from "./Context";

const ChildC = () => {
  //Now you will use the values coming from Parent component using useContext

  const name = useContext(data);
  const age = useContext(data1);

  return (
    <>
      <h1>
        {name} guys and age is {age}
      </h1>
    </>
  );
};

export default ChildC;
