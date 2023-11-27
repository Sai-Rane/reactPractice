import React from "react";
import Child from "./Child";

const Parent = () => {
  const getData = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <div>Parent</div>
      <Child getData={getData} />
    </>
  );
};

export default Parent;
