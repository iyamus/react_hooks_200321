import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration = 1) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`; // ` `안에서 값을 호출할 때는 ${}로!
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeIn1 = useFadeIn(3);
  const fadeIn2 = useFadeIn(5);
  return (
    <div className="App">
      Message
      <h4 {...fadeIn1}>check</h4>
      <p {...fadeIn2}>Hello~ Are you there?</p>
      <br />
    </div>
  );
}
