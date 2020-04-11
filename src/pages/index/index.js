import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "@/store";
import "@/assets/stylesheets/reset.scss";
import "@/assets/stylesheets/common.scss";
import "@/assets/fonts/iconfont.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
