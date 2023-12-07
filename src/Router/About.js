import React from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  return (
    <>
      <div>You are at About page and id is {location.state.num}</div>
      <Link to="/contact">Contact us</Link>
    </>
  );
};

export default About;
