import React from "react";
import { useState } from "react";

const ToDoItem = ({task}) => {

    const [isDone,setIsDone] = useState(false)

    function handleClick () {
        setIsDone((perValue) => !perValue)
    }
    
    
    

    return(
        <div onClick={handleClick}>
           <li className="task" style={{textDecoration : isDone ? "line-through" : "none"}}  >{task}</li>
        </div>
    )
}

export default ToDoItem;