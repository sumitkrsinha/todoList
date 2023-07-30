import React, { useState } from 'react'
import "./style.css";

const TodoList = () => {

    // const[tasks, setTasks] = useState( [] );
    const[newtask, setNewtask] = useState('');

  return (
    <div className="full_body">
        <h1>TodoList</h1>
        <div className="form">
            <input
                type="text"
                className="task_input"
                value={newtask}
                placeholder='Enter Your Task' 
                onChange={(e) => {
                    setNewtask(e.target.value)
                }}/>
            <button>Add</button>    
        </div>
        <p>{newtask}</p>
    </div>
  )
}

export default TodoList