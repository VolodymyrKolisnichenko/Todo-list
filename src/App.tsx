import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./Todolist";

function App() {
  let initTasks = [
    {id: 1, title: "CSS&HTML", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]

  let arr = useState(initTasks);


  let [tasks, setTasks] = arr;

  function removeTask (id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <TodoList title="What to learn" tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}
export default App;
