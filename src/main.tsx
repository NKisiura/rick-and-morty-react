import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found. Please check index.html.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
