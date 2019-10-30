import React, { useState, useEffect } from "react";
import "./App.css";

const FunctionApp = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [moveX, setMoveX] = useState("");
  const [moveY, setMoveY] = useState("");

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const _handleMouseMove = e => {
    setMoveX((width / 2 - e.nativeEvent.clientX) * 0.1 + "px");
    setMoveY((height / 2 - e.nativeEvent.clientY) * 0.1 + "px");
  };

  return (
    <div>
      <header>
        <div
          className='bg'
          onMouseMove={_handleMouseMove}
          style={{ marginLeft: moveX, marginTop: moveY }}
        />
      </header>
    </div>
  );
};

export default FunctionApp;
