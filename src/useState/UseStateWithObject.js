// https://www.youtube.com/watch?v=rSgI_e5FVxM
// useState hooks with object

import React, { useState } from "react";

const UseStateWithObject = () => {
  const [values, setValues] = useState({ firstName: "John", lastName: "Will" });

  console.log("bef update", values);
  //on click of update button you need to change firstname and last name
  function update() {
    //setValues({ firstName: "Jack" }); //This will change the firstname to Jack but last name will go as undefined(because he is only getting firstName and he doesnt know the lastname), To avoid this you need to create a copy the object using spread operator and then update the values

    //using spread operator
    setValues({ ...values, firstName: "Jack" }); //after spreading(creating a copy of object) we are just overriding the first name over here
    console.log("After update", values);
  }
  return (
    <>
      <h1>
        First name is {values.firstName} and last name is {values.lastName}
      </h1>
      <button onClick={update}>Update</button>
    </>
  );
};

export default UseStateWithObject;
