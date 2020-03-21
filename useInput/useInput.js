import React, { useState } from "react";
import "./styles.css";

// useInput
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
    console.log(value);
  };
  return { value, onChange }; // onChange 역시 반환해줘야 사용될 수 있음.
};

export default function App() {
  const maxLen = value => value.length <= 10; // 글자 수 제한하는 validator
  const name = useInput("Mr. ", maxLen); // useInput 초기값에 maxLen도 함께 선언하여 초기화한다.

  return (
    <div className="App">
      <input placeholder="name" value={name.value} onChange={name.onChange} />{" "}
      <br /> <br />
      <input placeholder="name" {...name} />
    </div>
  );
}
