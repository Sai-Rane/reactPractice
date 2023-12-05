import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { buyBook } from "./BookTypes";
import store from "./Store";
const Redux = () => {
  //   console.log("store", store);
  console.log("store", store.getState());
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch");
    dispatch({ type: buyBook });
  }, []);

  return <div>Redux</div>;
};

export default Redux;
