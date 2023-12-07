import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const id = 5;
  const navigate = useNavigate();
  console.log("navigate", navigate);
  const goToAbout = () => {
    // navigate("/about");
    navigate("/about", { state: { num: id } });
  };
  return (
    <>
      <div>Home page</div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <button onClick={goToAbout}>About</button>
    </>
  );
};

export default Home;
