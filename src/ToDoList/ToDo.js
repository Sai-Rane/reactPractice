// https://www.youtube.com/watch?v=GD_G41vWAJc&t=2s

import React, { useState } from "react";
import "./style.css";

const ToDo = () => {
  const [activity, setActivity] = useState("");
  const [listdata, setListdata] = useState([]);

  function addActivity() {
    // setListdata([...listdata, activity]);
    // console.log("listdata", listdata);

    setListdata((listdata) => {
      const updatedList = [...listdata, activity];
      console.log("updatedList", updatedList);
      setActivity(""); //making the input field empty after clicking on Add Activity button
      return updatedList;
    });
  }

  function removeActivity(i) {
    console.log("index", i);
    const updatedList = listdata.filter((ele, ind) => {
      return i != ind;
    });
    setListdata(updatedList);
  }

  return (
    <div className="main">
      <div className="title">To Do List</div>
      <div className="inputButton">
        <input
          className="todoInput"
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        {activity && (
          <button className="todoButton" onClick={addActivity}>
            Add
          </button>
        )}
      </div>

      {/* <div>{listdata}</div> */}

      {listdata != [] && //checking first that listdata should not be empty
        listdata.map((e, i) => {
          console.log("listdjhsajd", e);
          return (
            <div className="list" key={i}>
              {/* <span>{i}</span> */}
              <span>{e}</span>
              <button
                className="todoButton"
                onClick={() => {
                  removeActivity(i);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      <br></br>
    </div>
  );
};

export default ToDo;
