//What is useContext
//It is a hook. Used when you want to pass data from Parent component to child component
//You need to remember 3 terms regarding useContext and they are as folows: createy,provider,useContext

import React, { createContext } from "react";
import ChildA from "./ChildA";
const data = createContext();
const data1 = createContext();

const Context = () => {
  //I want to pass the name and age in ChildC component
  //We have 2 data to pass (i.e name and age) so we need to create 2 contexts as shown above.After creating context, I need to provide these 2 data to my child component. Now you need to wrap the component which need these 2 data in Provider as shown below. You also need to export the data as shown below
  const name = "Morning";
  const age = 10;
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
};

export default Context;
export { data, data1 };
