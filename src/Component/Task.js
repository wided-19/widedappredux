import React from 'react';
import Edit from './Edit';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../JS/Action/action';
import Reduxapp from './Reduxapp.css';

 const  Task = ({task}) => {
   const dispatch=useDispatch();
    return (
        <div>
            
            <span className={task.isDone?"done":null}> {task.text} </span>
            <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
          <Edit task ={task}/>
            <button onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "undone":"done"}</button>
        </div>
    )
}

export default Task;