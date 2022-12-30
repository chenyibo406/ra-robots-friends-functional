import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./App";
import { searchRobots } from "./reducer";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();
