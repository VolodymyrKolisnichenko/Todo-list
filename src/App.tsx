import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" />
      <Todolist title="What to learn" />
      <Todolist title="What to learn" />
    </div>
  );
}

export default App;
