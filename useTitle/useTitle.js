import React, { useState, useEffect } from "react";
import "./styles.css";

const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); // <title> 요소 가져오기
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;
};

export default function App() {
    const titleUpdate = useTitle("Loading...");

    setTimeout(() => {
        titleUpdate("HOME");
    }, 3000);

    return (
        <div className="App">
            <h1>hi</h1>
        </div>
    );
}
