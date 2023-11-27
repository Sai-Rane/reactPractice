import React, { useEffect, useState } from "react";

const Form = () => {
  //simple object to strore name,email and password
  const data = { name: "", email: "", password: "" };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  const handleData = (e) => {
    // console.log("e.target", e);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log("inputData", inputData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory!!");
    } else {
      setFlag(true);
    }
  };

  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  return (
    <>
      <pre>{flag ? <h2>Successfully Registered</h2> : ""}</pre>
      <form onSubmit={handleSubmit}>
        <h3>Registration Page</h3>
        <input
          type="value"
          placeholder="Enter name"
          name="name"
          autoComplete="off"
          value={inputData.name}
          onChange={handleData}
        ></input>
        <br />
        <input
          type="email"
          autoComplete="off"
          placeholder="Enter email"
          name="email"
          value={inputData.email}
          onChange={handleData}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={inputData.password}
          onChange={handleData}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
