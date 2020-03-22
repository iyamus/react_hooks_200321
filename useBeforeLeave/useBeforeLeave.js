import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useBeforeLeave = onBefore => {
  if (!onBefore || typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    console.log(event);
    const { clientY } = event;
    if (clientY <= 0) { // 마우스가 위로 향할 때 측정
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const beforeLife = () => console.log("Don't leave");
  useBeforeLeave(beforeLife);
  return (
    <div className="App">
      Message
      <br />
    </div>
  );
}
