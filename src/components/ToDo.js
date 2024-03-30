import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";


function ToDo() {

const [input,setInput] = useState("");
let [task,setTask] = useState([]);

function handleEvent(e){
     setInput(e.target.value);
     
}

function handleAddItem(){
    if(!input) return;
    setTask((pre)=> [...pre,input])
    setInput("")
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleEvent} value={input}/>
        <button>
          <span onClick={handleAddItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {task.map((list)=> <ToDoItem task = {list}/>)}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;