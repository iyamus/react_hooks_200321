import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  // useRef() 는 document.getElementByID()와 동일한 기능 수행
  const reference = useRef();

  setTimeout(() => reference.current.focus(), 3000);

  return (
    <div className="App">
      <h1>hi</h1>
      <input placeholder="Cool" ref={reference} />
    </div>
  );
}

