// https://www.youtube.com/watch?v=uXwFVf1A9ak&t=752s

//Controlled Components are the ones which are controlled by React
import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //Using one handler for name and password
  const handleOnChange = (e) => {
    if (e.target.name == "firstName") {
      const capitalize = e.target.value.toUpperCase();
      setName(capitalize);
    } else {
      setPassword(e.target.value);
    }
  };
  //   const handlePassword = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <form>
      <label>First Name</label>
      <input
        type="text"
        value={name}
        onChange={handleOnChange}
        name="firstName"
      ></input>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={handleOnChange}
        name="password"
      ></input>
    </form>
  );
};

export default Controlled;
