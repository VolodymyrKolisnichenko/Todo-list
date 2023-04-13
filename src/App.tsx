import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./Todolist";

function App() {

  // let [tasks, setTasks] = arr;
  let [tasks, setTasks] = useState([
    { id: 1, title: "CSS&HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]);
  let [filtered, setFilter] = useState("all");

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  let taskForTodoList = tasks;
  if (filtered === "completed") {
    taskForTodoList = tasks.filter(el => el.isDone === true)
  }
  if (filtered === "active") {
    taskForTodoList = tasks.filter(el => el.isDone === false)
  }

  return (
    <div className="App">
      <TodoList 
      title="What to learn" 
      tasks={taskForTodoList} 
      removeTask={removeTask}
      setFilter={setFilter} />
    </div>
  );
}
export default App;
