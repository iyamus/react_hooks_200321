import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNetwork = onchange => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onchange === "function") {
      setStatus(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default function App() {
  const handleNetworkChange = online => {
    console.log(online ? "Online" : "Offline");
  };
  const statusNetwork = useNetwork(handleNetworkChange);
  
  return (
    <div className="App">
      Message
      <br />
      <h3>{statusNetwork ? "Online" : "Offline"}</h3>
    </div>
  );
}
