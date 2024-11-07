import ReactDOM from "react-dom/client";
import React from "react";
// import App  from "./app.jsx"
import App from "./day3/app.jsx";
import { Provider } from "react-redux";
// import store from './day2/store/index'
import store from "./day3/store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
