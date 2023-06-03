import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./Context/CountryContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider>
    <App />
  </Provider>
);
