import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import { NavProvider } from "./Component/NavBar/NavigationContext";
import { Provider } from "react-redux";
import { storIndex } from "./Store/storIndex";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavProvider>
      <Provider store={storIndex}>
      <App />
      </Provider>
    </NavProvider>
  </React.StrictMode>
);
