import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Leaf from "./effect/Leaf.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Leaf />
    <App />
  </StrictMode>
);
