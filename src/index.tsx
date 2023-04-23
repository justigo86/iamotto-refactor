import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (container != null) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error("Unable to find Container element in DOM.");
}
