import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let tasks = [
    {id: 1, title: "CSS&HTML", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} />
    </div>
  );
}
export default App;
