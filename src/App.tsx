import { useState } from "react";

import Home from "./pages/Home/Home";

import "./assets/css/App.css";
import Timer from "./ui/Timer/Timer";

function App() {
  return (
    <>
      <Home />
      <h1>Vite + React</h1>
      <Timer />
    </>
  );
}

export default App;
