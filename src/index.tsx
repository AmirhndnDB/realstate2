import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import { NavProvider } from "./Component/NavBar/NavigationContext";
import { Provider } from "react-redux";
import { storIndex } from "./Store/storeIndex";
import { DataProvider } from "./hooks/useDataContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavProvider>
      <DataProvider>
        <Provider store={storIndex}>
          <App />
        </Provider>
      </DataProvider>
    </NavProvider>
  </React.StrictMode>
);
