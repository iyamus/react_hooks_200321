import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
export default function App() {
  const triggerNotif = useNotification("Can I love you?", {
    body: "I already love you!"
  });
  return (
    <div className="App">
      Message
      <br />
      <button onClick={triggerNotif}>CHECK</button>
    </div>
  );
}
