import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    // confirm() 함수는 message의 선택값에 따라 달라지며, alert()와 동일한 기능 수행함
    // 'yes'선택시 callback() 함수 실행됨.
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
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
