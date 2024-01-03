// https://www.youtube.com/watch?v=pYo_-HW29Ak&t=515s
import React, { useState } from "react";

const UseStateWithArray = () => {
  const [items, setItems] = useState([]);
  function addItems() {
    setItems([...items, { id: items.length, value: "Bike" }]);
  }
  return (
    <>
      <ol>
        {items.map((ele) => {
          return <li key={ele.id}>{ele.value}</li>;
        })}
      </ol>
      <button onClick={addItems}>Add items</button>
    </>
  );
};

export default UseStateWithArray;
