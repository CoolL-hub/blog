// Import the generated route tree
import App from "./App";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/index.css";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
