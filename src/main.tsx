// Import the generated route tree
import { Profiler, StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./assets/css/index.css";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Profiler id="main" onRender={() => {}}>
        <App />
      </Profiler>
    </StrictMode>,
  );
}
