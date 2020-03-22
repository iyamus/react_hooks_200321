import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  // console.log(loading, data, error);
  console.log(
    `loading: ${loading}, data: ${JSON.stringify(data)}, error: ${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      {loading ? "Loading" : "Not loading"}
      <br />
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
