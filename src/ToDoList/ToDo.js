// https://www.youtube.com/watch?v=GD_G41vWAJc&t=2s

import React, { useState } from "react";

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
    <>
      <div>To Do List</div>
      <input
        type="text"
        placeholder="Add Activity"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
      />
      <button onClick={addActivity}>Add</button>
      {/* <div>{listdata}</div> */}

      {listdata != [] && //checking first that listdata should not be empty
        listdata.map((e, i) => {
          console.log("list", e);
          return (
            <div key={i}>
              <span>{e}</span>
              <button
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
    </>
  );
};

export default ToDo;
