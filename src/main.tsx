import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/ubuntu/latin-400.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-700.css";
import "@fontsource/ubuntu-mono/latin-400.css";
import "@fontsource/ubuntu-mono/latin-700.css";
import "@fontsource/quicksand/latin-700.css";
import "@fontsource/pixelify-sans/latin-500.css";
import "@fontsource/nunito/latin-800.css";
import { App } from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
