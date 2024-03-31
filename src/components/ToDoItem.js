import React from "react";
import { useState } from "react";

const ToDoItem = (props) => {
 
       

    
    
    return(
        <div onClick={()=>{props.delete(props.id)}}>
           <li className="task">{props.task}</li>
        </div>
    )
}

export default ToDoItem;