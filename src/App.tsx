import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let initTasks = [
    {id: 1, title: "CSS&HTML", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]

  let arr = useState(initTasks);

  let tasks = arr[0];
  let setTasks = arr[1];

  function removeTask (id: number) {
    tasks = tasks.filter(t => t.id !== id)
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}
export default App;
