import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

// callback 함수는 기본적으로 alert()와 동일한 기능을 수행한다.
const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    // confirm() 함수는 message의 선택값에 따라 달라지며, 'yes'선택시 callback() 함수 실행됨.
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWord = () => console.log("DELETE");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  return (
    <div className="App">
      Message
      <br />
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
