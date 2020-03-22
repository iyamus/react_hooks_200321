import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = fnClick => {
  if (typeof fnClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      // "click"은 mouse click을 의미하며, 해당 수행시 fnClick함수를 수행한다. click은 mouseover로 변경 가능
      element.current.addEventListener("click", fnClick);
    }

    // componentWillUnmount 때는 동작하지 않기 위해서 작성함. 이벤트 동작후 cleanup 필요함
    // component가 mount되기 전에는 동작하지 않도록함.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", fnClick);
      }
    };
  }, []); // [ ]가 비워 있으므로 componentDidMount 기능만 수행
  return element;
};

export default function App() {
  const say = () => console.log("Say");
  const title = useClick(say);

  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
      ddd
    </div>
  );
}
