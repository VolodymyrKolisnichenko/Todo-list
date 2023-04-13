import React from "react";

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: Function;
    setFilter: Function
}

export function TodoList(props: PropsType) {
   
    return <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>{
        props.tasks.map(el => {
            return <li><input 
            type="checkbox" 
            checked={el.isDone} />
            <span>{el.title}</span>
            <button onClick={() => {props.removeTask(el.id)}}>X</button></li>
            })}
      </ul>
   
      <div>
      <button onClick={() => {props.setFilter('all')}}>All</button>
      <button onClick={() => {props.setFilter('active')}}>Active</button>
      <button onClick={() => {props.setFilter('completed')}}>Completed</button>
      </div>
      </div>;
  }
