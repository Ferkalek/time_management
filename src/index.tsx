import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.generated.css";
import "./styles/main.scss";
import App, { AppState } from "./App";
import * as serviceWorker from "./serviceWorker";

const appState = new AppState();

ReactDOM.render(
  <React.StrictMode>
    <App state={appState} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
