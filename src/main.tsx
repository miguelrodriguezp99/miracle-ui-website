import "./miracle-ui.css";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ScrollToHashElement from "./lib/ScrollToHashElement.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ScrollToHashElement />
    <App />
  </HashRouter>
);
