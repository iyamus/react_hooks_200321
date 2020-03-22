import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    console.log("y", window.scrollY, "x", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();

  return (
    // tag 안에 style을 사용할 경우, {{}}을 사용한다.
    <div className="App" style={{ height: "1000vh" }}>
      Message
      <br />
      <h4 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hey
      </h4>
    </div>
  );
}
