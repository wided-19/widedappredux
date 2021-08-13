import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Action/action';



const AddTask = () => {

    const [text , setText]= useState("");
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        e.preventDefault();
        if(text.trim()){
            dispatch(addTask({id:Math.random(), text:text,isDone:false}));
            setText("");

        }else {
            alert("can't add an empty task")
        }
    }

    return (
        <div>
           <input placeholder='add task...' value={text} onChange={(e)=>setText(e.target.value)}/>
           <button onClick={handleChange}>AddTask</button>
        </div>
    )
}

export default AddTask; 