import React from "react";
import ReactDOM from "react-dom/client";
import "./Game.css";
import reportWebVitals from "./reportWebVitals";
import Game from "./Game.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game items={["item1", "item2", "item3"]} />);
reportWebVitals();
