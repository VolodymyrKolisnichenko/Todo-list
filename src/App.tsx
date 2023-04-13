import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let task1 = [
    {id: 1, title: "CSS&HTML", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]
  let task2 = [
    {id: 1, title: "Batman", isDone: true},
    {id: 2, title: "Batwoman", isDone: false},
    {id: 3, title: "Batchild", isDone: true},
  ]
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={task1} />
      <Todolist title="Movies" tasks={task2} />
    </div>
  );
}
export default App;
