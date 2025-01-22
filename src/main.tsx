import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./services/styles/normalize.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

