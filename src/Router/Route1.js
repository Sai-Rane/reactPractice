// https://www.youtube.com/watch?v=8DRq5nPC7ak
// https://www.youtube.com/watch?v=chPnXfOhjug
// https://www.youtube.com/watch?v=162Lm52CTBM
// https://www.youtube.com/watch?v=1qPzmBlTlJQ

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Route1 = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<div>I am home page</div>} />
      <Route path="/contact" element={<div>I am contact page</div>} />
      <Route path="/about" element={<div>I am about page</div>} /> */}

      {/* Now let's pass component in element tag as shown below */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Route1;
