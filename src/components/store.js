import React, { createContext, useReducer } from "react";
//import boilerplate from "./boilerplate/boilerplate";
import themeReducer from "./Reducers/themeReducer";

let boilerplate = localStorage.getItem("ch-boilerplate")
let ch_html = localStorage.getItem("ch-html");
let ch_css = localStorage.getItem("ch-css");
let ch_js = localStorage.getItem("ch-js");

const initialState = {
  theme: "light",
  html: ch_html == null ? boilerplate.html : ch_html,
  js: ch_js == null ? boilerplate.html : ch_js,
  css: ch_css == null ? boilerplate.html : ch_css,
  autoRun: "false",
  tempHtml: ch_html == null ? boilerplate.html : ch_html,
  tempJs: ch_js == null ? boilerplate.html : ch_js,
  tempCss: ch_css == null ? boilerplate.html : ch_css,
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
