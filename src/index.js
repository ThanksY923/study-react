import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
// import App  from "./app.jsx"
// import App from "./day3/app.jsx";
// import App from "./day3/appfun";
import App from "../src/hooks/day1/helloHook";
import { Provider } from "react-redux";
// import store from './day2/store/index'
import store from "./day3/store/index";
// BrowserRouter
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      {/* 分包包裹，应急显示 */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <App></App>
      </Suspense>
    </HashRouter>
  </Provider>
);
