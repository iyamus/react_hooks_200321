import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";
import { elementType } from "prop-types";

const useFullScreen = callback => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFullScreen };
};

export default function App() {
  const onFullScr = isFull => {
    console.log(isFull ? "Full" : "Not full");
  };
  const { element, triggerFull, exitFullScreen } = useFullScreen(onFullScr);
  return (
    <div className="App">
      Message
      <br />
      <div ref={element}>
        <img
          src="https://www.thecragandcanyon.ca/wp-content/uploads/2020/03/0318-ba-banff-corona-virus.jpg?quality=80&strip=all"
          style={{ width: "400px" }}
          alt="test"
        />
        <br />
        <button onClick={triggerFull}>Make fullScreen</button>
        <button onClick={exitFullScreen}>Exit fullScreen</button>
      </div>
    </div>
  );
}
