import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { ThemeProvider } from "@emotion/react";
import theams from "./theams";
const root = ReactDOM.createRoot(document.getElementById("root"));
//  here we  have to use the render method to render the react apps
root.render(
  <ThemeProvider theme={theams}>
    <App />
  </ThemeProvider>
);
