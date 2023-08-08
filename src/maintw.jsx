import React from "react";
import ReactDOM from "react-dom/client";
import AppTW from "./AppTW.jsx";
import "./tailwind.css";
import Marquee from "./Marquee.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTW />
    <Marquee />
  </React.StrictMode>,
);
