import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  // beforeunload가 정상 수행하도록 함.
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  // beforeunload: window창을 닫기 전에 확인 메시지 alert
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function App() {
  // 단순하게 usePreventLeave함수에서 리턴값을 가져온다는 개념을 넘어, 해당 리턴값을 통해서 재호출한다.
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      Message
      <br />
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Protect</button>
    </div>
  );
}
