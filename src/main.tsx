import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "@ui/AppContainer";
import { App } from "@ui/App";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found. Please check index.html.");
}

createRoot(root).render(
  <StrictMode>
    <AppContainer>
      <App></App>
    </AppContainer>
  </StrictMode>,
);
