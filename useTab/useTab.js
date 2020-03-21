import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Session_1",
    content: "This is session_1"
  },
  {
    tab: "Session_2",
    content: "This is session_2"
  }
];

// useTabs
const useTabs = (initValue, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initValue);

  // validate for 'allTabs'
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx
  };
};

export default function App() {
  // changeItem는 setCurrentIdx(currentIdx를 변경시키는 함수)임을 기억하자.
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {/* map의 구조는 { 상수.map ( 파라미터 => (활용))} */}
      {content.map((session, index) => (
        <button onClick={() => changeItem(index)}>{session.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
