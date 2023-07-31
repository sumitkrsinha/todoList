import React, { useState } from 'react'
import "./style.css";

const TodoList = () => {

    const[tasks, setTasks] = useState( [] );
    const[newtask, setNewtask] = useState('');

    const addTask = () => {
        if (newtask.trim() === ''){
            alert("Enter valid task");
            return;
        }
        setTasks( [...tasks,{id: Date.now(), text:newtask, completed:false}]);
        console.log(tasks[0]);
        setNewtask('');
    };

    const handleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      };

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
            <button className='add' onClick={addTask}>Add</button>    
        </div>
        <ul>
            {tasks.map((task) => (
                <li className='task_item' key={task.id}>
                    <input type="checkbox" id={task.id}/>
                    <label 
                        htmlFor={task.id}
                        className={task.completed ? 'completed' : ''}
                        onClick={() => handleTaskCompletion(task.id)}>{task.text}</label>
                    <button className="delete">Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList