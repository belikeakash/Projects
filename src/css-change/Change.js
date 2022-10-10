import React, { useState } from "react";
import "./Change.css";
function Change() {
  const [size, setSize] = useState(10);
    const [color,setColor] = useState("#000")
  function sizeChange(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }
  function colorChange(e) {
    console.log(e.target.value);
    setColor(e.target.value)
  }
  return (
    <>
      <input
        type="range"
        name="size"
        id="size"
        value={size}
        onChange={sizeChange}
      />
      <input type="color" onChange={colorChange} />
      <h1 style={{ "fontSize": `${size}px` , "color" : `${color}` }}>This is the property of H1</h1>
    </>
  );
}

export default Change;
