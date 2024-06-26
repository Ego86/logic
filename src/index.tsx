import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/reset.scss";
createRoot(document.querySelector("#root")!)
  .render(
    <StrictMode>
      <App />
    </StrictMode>
  )