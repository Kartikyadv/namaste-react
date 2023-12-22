import React from "react";
import ReactDOM from "react-dom/client";
    
    const parent = React.createElement("div",{id : "parent"},[
        React.createElement("div",{id: "child"}, [
            React.createElement("h1",{},"hi 1"),
            React.createElement("h1",{},"hi 2"),
        ])
    ]);

    console.log(parent); // object

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);