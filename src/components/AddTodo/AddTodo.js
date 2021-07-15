import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const submit = () =>{
        if (text.length > 0){
            dispatch(addTodo({id : nanoid(), todo: text}))
        }
       setText ('');
    }
    return (
        <div className = "add-todo">
            <p>Enter the tasks todo:</p>
            <input value={text} name= 'userInput'  onChange= {(e)=> setText(e.target.value)}></input>
            <button onClick= {submit}> Add</button>
        </div>
    )
}

export default AddTodo;
