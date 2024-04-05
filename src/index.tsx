import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import { NavProvider } from "./Component/NavBar/NavigationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>
);
